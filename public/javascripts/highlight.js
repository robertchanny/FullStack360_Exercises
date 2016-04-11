var bolds = document.getElementsByTagName('strong');
var i = 0;

highlight = function(bolds) {
	bolds[i].style.color = 'green';
}

unhighlight =  function(bolds) {
	bolds[i].style.color = 'black';
	i++;
}

//TODO: make it loop through each bold and have each one take turns becoming green