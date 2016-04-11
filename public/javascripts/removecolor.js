// function removeColor(){
// 	document.getElementById('colorSelect').remove(document.getElementById('colorSelect').selectedIndex);
// }

function removeColor(){
	var selectedOption = document.getElementById('colorSelect');
	selectedOption.remove(this.selectedIndex);
}