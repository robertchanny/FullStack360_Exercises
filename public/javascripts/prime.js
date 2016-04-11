var isPrime = function() {
	var num = Number(document.getElementById('prime').value);
	if (num <= 0 || num == 1 || num >= 1000){
		document.getElementById('primeResult').innerHTML = 'Invalid Input!'; 
		return;
	}
	for (i=2; i<num; i++) {
		if (num % i == 0) {
			document.getElementById('primeResult').innerHTML = 'Not Prime!'; 
			return;
		}
	}
	document.getElementById('primeResult').innerHTML = 'Prime!'; 
	return;
}