let isEnabled: boolean = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  isEnabled = request.enabled;
});
