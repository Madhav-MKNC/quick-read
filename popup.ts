const toggleButton = document.getElementById("toggleButton") as HTMLInputElement;

toggleButton.addEventListener("change", () => {
  chrome.runtime.sendMessage({ enabled: toggleButton.checked });
});
