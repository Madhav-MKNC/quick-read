const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("change", function () {
  chrome.runtime.sendMessage({ enabled: toggleButton.checked });
});
