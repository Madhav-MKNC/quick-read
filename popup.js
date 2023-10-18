const toggleButton = document.getElementById("toggleButton");
let isEnabled = false;

toggleButton.checked = false; // Set the default state to "off"

toggleButton.addEventListener("change", function () {
  isEnabled = toggleButton.checked;
  chrome.runtime.sendMessage({ enabled: isEnabled });

  if (isEnabled) {
    // Execute the conversion logic
    convertToBionicReadable();

    // After conversion, revert the toggle to "off"
    toggleButton.checked = false;
    isEnabled = false;
  }
});
