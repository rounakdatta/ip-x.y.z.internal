(function() {
	console.log("worked")

	var currentURL = window.location['href'].replace(/(^\w+:|^)\/\//, '');
	var firstColon = currentURL.indexOf(':');
	var actualIP = currentURL.substr(0, firstColon)
	actualIP = actualIP.substr(actualIP.indexOf("-") + 1).replace(/-/g, ".");
	var remainingIP = currentURL.substr(firstColon);

	window.location = actualIP + remainingIP;

})();
