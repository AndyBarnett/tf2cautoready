function injectScript() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
		file: "content_script.js",
		runAt: "document_end"
		});
    });
}
document.getElementById('clickactivity').addEventListener('click', injectScript);
//chrome.tabs.onUpdated.addListener(injectionScript);