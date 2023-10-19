const toggleButton = document.getElementById("toggleButton") as HTMLInputElement;

toggleButton.addEventListener("change", () => {
  if (toggleButton.checked) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      setTimeout(() => {
        chrome.tabs.sendMessage(tabs[0].id, { enableConversion: true });
      }, 100); // Add a delay of 100 milliseconds
    });
  }
});
