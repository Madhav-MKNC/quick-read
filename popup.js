document.addEventListener("DOMContentLoaded", function () {
  const convertButton = document.getElementById("convertButton");

  convertButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setTimeout(() => {
        chrome.tabs.sendMessage(tabs[0].id, { enableConversion: true });
      }, 100); // Add a delay of 100 milliseconds
    });
  });
});
