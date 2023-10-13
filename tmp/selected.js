/*
GET THE SELECTED TEXT
*/
var selectedText = window.getSelection().toString();  // Get the selected text
var modifiedText = selectedText.toUpperCase();  // Modify the text (e.g., to uppercase)


/*
REFLECT THE CHANGES ON THE WEBPAGE LOCALLY
*/
var selection = window.getSelection();  // Get the selection object
if (selection.rangeCount > 0) {
  var range = selection.getRangeAt(0);  // Get the range of the selection
  range.deleteContents();  // Remove the selected text
  var textNode = document.createTextNode(modifiedText);  // Create a new text node with the modified text
  range.insertNode(textNode);  // Insert the modified text back into the page
}
