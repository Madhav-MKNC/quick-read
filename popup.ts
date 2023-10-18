const toggleButton = document.getElementById("toggleButton") as HTMLInputElement;
let isEnabled: boolean = false;

toggleButton.checked = false; // Set the default state to "off"

toggleButton.addEventListener("change", () => {
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
