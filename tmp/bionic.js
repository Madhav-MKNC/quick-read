/*
Bionic converter 
*/
function convertToBionic(text) {
  // Split the text into words
  const words = text.split(' ');

  // Iterate through each word
  const bionicText = words.map((word) => {
    if (word.length > 0) {
      const firstLetter = word[0].toUpperCase(); // Make the first letter bold by capitalizing it
      const restOfWord = word.slice(1); // Extract the rest of the word
      return `<strong>${firstLetter}</strong>${restOfWord}`;
    }
    return word;
  });

  // Join the words back into a single string
  return bionicText.join(' ');
}



/*
selection event listener
*/
document.addEventListener('selectionchange', function() {
  const selection = window.getSelection();
  if (selection && !selection.isCollapsed) {
    const selectedText = selection.toString();
    // Call a function to make the selected text bionic readable
    makeBionicReadable(selection);
  }
});



