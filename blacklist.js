<<<<<<< HEAD
//var input = document.createElement("input");
//input.type = "text";
// var list = new Array(10);
		var list = new Array();
		var text = document.getElementById('banned_url').value;
		function insert(){
			//alert("insert works");
			if (text.indexOf(".") != -1){
				list.push(document.getElementById('banned_url').value);

			}
			showUrl();
			document.getElementById("insert_button").value = "";
		}
=======
var input = document.createElement("input");
input.type = "text";
var list = new Array(10);

>>>>>>> origin/master

function insert(){
	list.push("input");
}

function delete(){
	var index = list.indexOf("text");
	if (index > - 1){
		list.splice(index, 1);
	}

}
