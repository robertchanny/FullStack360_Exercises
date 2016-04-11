testNumbers = function() {
	var numlist = document.getElementById('largestNumber').value;
	numarray = numlist.split(',');
	biggestNumber = Number(numarray[0]);
	for (i=1; i<numarray.length; i++) {
		number = Number(numarray[i]);
		if (number > biggestNumber) {
			biggestNumber = number;
		}
	}
	document.getElementById('result').innerHTML = biggestNumber; 
}