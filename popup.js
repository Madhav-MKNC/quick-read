const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("change", function () {
  if (toggleButton.checked) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setTimeout(() => {
        chrome.tabs.sendMessage(tabs[0].id, { enableConversion: true });
      }, 100); // Add a delay of 100 milliseconds
    });
  }
});
