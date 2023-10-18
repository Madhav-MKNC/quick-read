let isEnabled = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  isEnabled = request.enabled;
});
