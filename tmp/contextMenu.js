/*
ADD THE ACTIVATION OPTION IN CONTEXT MENU
*/
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "convertToBionicText") {
      // Get the selected text from the context menu
      const selectedText = info.selectionText;
  
      // Convert the selected text to bionic readable text (you'll need to implement this)
      const bionicText = convertToBionic(selectedText);
  
      // Replace the selected text with the converted bionic text
      const script = `
        var selection = window.getSelection();
        var range = selection.getRangeAt(0);
        range.deleteContents();
        var textNode = document.createTextNode("${bionicText}");
        range.insertNode(textNode);
      `;
      chrome.tabs.executeScript(tab.id, { code: script });
    }
  });
  