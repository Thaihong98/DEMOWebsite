(function () {
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    }

    function decodeJWTPayload(token) {
        if (!token) return "";
        try {
            const base64Url = token.split(".")[1];
            const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
            const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
            return new TextDecoder().decode(bytes);
        } catch (e) {
            console.warn("Failed to decode JWT payload:", e);
            return "";
        }
    }

    // Keep reference to original window.open
    const originalOpen = window.open;
    let customHtml = "";

    window.open = function (...args) {
        const openingURL = args[0];
        const isLiveChat =
            openingURL.startsWith("https://secure.livechatenterprise.com/") ||
            openingURL.startsWith("https://secure.livechatinc.com/") ||
            openingURL.startsWith("https://direct.lc.chat/");
        if (!isLiveChat) return originalOpen.apply(this, args); // no livchat chat page, return as normal

        const token = decodeJWTPayload(getCookie("token"));
        if (!token) return originalOpen.apply(this, args); // no token, do normal open

        // Case 1: Secure LiveChat domain -> append param only
        if (typeof openingURL === "string" && !openingURL.startsWith("https://direct.lc.chat/")) {
            try {
                const url = new URL(openingURL, window.location.origin);
                url.searchParams.append("params", `token%3D${token}`);
                args[0] = url.toString();
            } catch (e) {
                console.warn("Invalid LiveChat URL:", openingURL);
            }
            return originalOpen.apply(this, args);
        }

        // Case 2: direct.lc domains -> inject custom iframe wrapper
        const tokenScript = `
        
            setTimeout(() => {
              LiveChatWidget.call("set_session_variables", {
                token: "${token}"
              });
            }, 500);
        `;

        customHtml = `
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Support Chat</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
    }
    iframe {
      width: 100%;
      height: 100%;
      border: none;
      display: block;
    }
  </style>
</head>
<body>
  <iframe id="chatFrame" src="${openingURL}"></iframe>
  <script>${tokenScript}</script>
</body>
</html>
`;
    };

    // Target element
    const el = document.querySelector('.item.ng-star-inserted a');

    if (el) {
        el.addEventListener('click', function (event) {
            event.preventDefault(); // stop default navigation
            const livechatURL = el.getAttribute("href") || "";
            console.log("Opening LiveChat URL:", livechatURL);
            const newWin = originalOpen.call(window, "", "_blank");

            if (newWin && customHtml) {
                setTimeout(() => {
                    newWin.document.open();
                    newWin.document.write(customHtml);
                    newWin.document.close();
                }, 500);
            }
            return false;
        }, true);
    } else {
        console.log("Target element not found");
    }
})();
