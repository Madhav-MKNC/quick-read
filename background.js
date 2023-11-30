chrome.commands.onCommand.addListener(function (command) {
    if (command === "toggle-feature") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { enableConversion: true });
        });
    }
});
