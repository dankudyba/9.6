

var list = document.getElementById('list'),
	 add = document.getElementById('addElem');
	 
add.addEventListener("click", addList);

function addList() {
	var element = document.createElement('li'),
		 tagElement = document.getElementsByTagName("LI").length;
	
	element.innerHTML = 'item ' + tagElement;
	list.appendChild(element);
}
