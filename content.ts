/**
 * This function converts the selected text on a page to bionic readable format.
 */
function convertToBionicReadable() {
  const selectedText = window.getSelection();
  const range = selectedText.getRangeAt(0);
  const content = range.cloneContents();

  const newNode = document.createElement("div");
  newNode.appendChild(content);

  const textNodes: Node[] = [];
  findTextNodes(newNode, textNodes);

  textNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent as string;
      const words = text.split(" ");

      const newText = document.createDocumentFragment();
      words.forEach((word, index) => {
        const span = document.createElement("span");
        if (word.length > 0) {
          const first40Percent = Math.ceil(word.length * 0.4);
          span.innerHTML = "<b>" + word.slice(0, first40Percent) + "</b>" + word.slice(first40Percent);

          if (index < words.length - 1) {
            span.appendChild(document.createTextNode(" "));
          }

          newText.appendChild(span);
        } else {
          newText.appendChild(document.createTextNode(" "));
        }
      });

      node.parentNode?.replaceChild(newText, node);
    }
  });

  range.deleteContents();
  range.insertNode(newNode);
}

function findTextNodes(node: Node, textNodes: Node[]) {
  if (node.nodeType === Node.TEXT_NODE) {
    textNodes.push(node);
  } else {
    for (let i = 0; i < node.childNodes.length; i++) {
      findTextNodes(node.childNodes[i], textNodes);
    }
  }
}

// Call the function to make the first 40% of letters in a selected text bold
// You can trigger this function using an event or user interaction on your webpage.
// Example:
// someButton.onclick = convertToBionicReadable;

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.enableConversion) {
    convertToBionicReadable(); // Call your conversion function here
  }
});
