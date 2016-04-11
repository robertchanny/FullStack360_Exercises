testWord = function() {
	var wordinput = document.getElementById('wordinput');
	var currentWord = wordinput.value.toLowerCase();
	var wordArray = currentWord.split("");
	var reverseArray = reverseWord(wordArray);
	var wordString = wordArray.toString();
	var reverseString = reverseArray.toString();

	if (wordString == reverseString) {
		console.log("PALINDROME")
		return;
	}
	else {
		console.log("NOT PALINDROME")
	}

}

reverseWord = function(word) {
	newWord = [];
	for (i=word.length-1; i>=0; i--) {
		newWord.push(word[i]);
	}
	return newWord;
}