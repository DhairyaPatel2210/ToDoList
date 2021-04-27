var button = document.getElementById("add");
var input = document.getElementById("input");
var list = document.getElementById("list");


function addItem(){
	var item = document.createElement("h5");
	var checkbox = document.createElement("input");
	var div = document.createElement("div");
	checkbox.setAttribute("type", "checkbox");
	checkbox.setAttribute("id", "check");
	checkbox.classList.add("checkbox");
	item.classList.add("showcase")
	item.appendChild(document.createTextNode(input.value));
	div.appendChild(checkbox);
	div.appendChild(item);
	div.classList.add("listLine");
	list.appendChild(div);
	input.value = "";
}

button.addEventListener("click",function(){
	if(input.value.length > 0){
		addItem();
	}
	
})

input.addEventListener("keypress", function(event){
	if(input.value.length > 0 && event.keyCode === 13){
		addItem();
	}
})


