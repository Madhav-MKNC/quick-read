function makeFirst40PercentLettersBold() {
  var selectedText = window.getSelection();
  var range = selectedText.getRangeAt(0);
  var content = range.cloneContents();

  var newNode = document.createElement("div");
  newNode.appendChild(content);

  var textNodes = [];
  findTextNodes(newNode, textNodes);

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

  range.deleteContents();
  range.insertNode(newNode);
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

// Call the function to make the first 40% of letters in a selected text bold
// You can trigger this function using an event or user interaction on your webpage.
// Example:
// someButton.onclick = makeFirst40PercentLettersBold;
