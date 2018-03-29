console.log('Hello World');

document.getElementById("button").onclick = function() {
	var firstName = "";

	firstName = document.getElementById("fName").value;

	console.log(firstName);
	alert(firstName);
	document.getElementById('para').innerHTML = firstName;
	document.getElementById("fName").value = "";
	document.getElementById("fName").style.backgroundColor = "white";
}


