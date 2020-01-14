// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener((tab) => {
	chrome.tabs.query(
		{ active: true, currentWindow: true },
		(tab) => { chrome.tabs.create({ url: chrome.runtime.getURL('index.html') }) }
	);
});