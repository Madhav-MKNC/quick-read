/*
This function converts the selected text or the entire page (if no text is selected) to bionic readable format
*/
function convertToBionicReadable() {
  var selectedText = window.getSelection();

  if (!selectedText || selectedText.toString().trim() === '') {
    // If no text is selected, convert the entire page
    convertNode(document.body);
  } else {
    // If text is selected, convert only the selected text
    var range = selectedText.getRangeAt(0);
    var content = range.cloneContents();

    var newNode = document.createElement("div");
    newNode.appendChild(content);

    convertNode(newNode);

    range.deleteContents();
    range.insertNode(newNode);
  }
}

function convertNode(node) {
  var textNodes = [];
  findTextNodes(node, textNodes);

  textNodes.forEach(function (node) {
    var text = node.textContent;
    var words = text.split(" ");

    var newText = document.createDocumentFragment();
    words.forEach(function (word, index) {
      var span = document.createElement("span");
      if (word.length > 0) {
        var first40Percent = Math.ceil(word.length * 0.4); // Calculate 40% of the word length
        span.innerHTML = "<b>" + word.slice(0, first40Percent) + "</b>" + word.slice(first40Percent);

        if (index < words.length - 1) {
          span.appendChild(document.createTextNode(" "));
        }

        newText.appendChild(span);
      } else {
        newText.appendChild(document.createTextNode(" "));
      }
    });

    node.parentNode.replaceChild(newText, node);
  });
}

function findTextNodes(node, textNodes) {
  if (node.nodeType == Node.TEXT_NODE) {
    textNodes.push(node);
  } else {
    for (var i = 0; i < node.childNodes.length; i++) {
      findTextNodes(node.childNodes[i], textNodes);
    }
  }
}

// Listener for messages from background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.enableConversion) {
    try {
      convertToBionicReadable();
    } catch (error) {
      console.error("Error during conversion", error);
    }
  }
});
