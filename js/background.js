chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
		if (!details.url.startsWith("http://ip-")) {
			return;
		}

		var currentURL = details.url.replace(/(^\w+:|^)\/\//, '');
		var firstColon = currentURL.indexOf(':');
		var firstDot = currentURL.indexOf('.');
		var actualIP = currentURL.substr(0, firstDot);
		actualIP = actualIP.substr(actualIP.indexOf("-") + 1).replace(/-/g, ".");
		var remainingIP = currentURL.substr(firstColon);

		return {redirectUrl: ("http://" + actualIP + remainingIP)};
    },
    {
        urls: [
			"*://*:*/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);