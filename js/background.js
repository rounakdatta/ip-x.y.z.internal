chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.ib, {
		file: 'js/inject.js'
	});
});
