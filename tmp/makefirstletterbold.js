function makeFirstLettersBold() {
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
      span.innerHTML = "<b>" + word[0] + "</b>" + word.slice(1);

      if (index < words.length - 1) {
        span.appendChild(document.createTextNode(" "));
      }

      newText.appendChild(span);
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
