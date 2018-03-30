console.log('Hello World');

document.getElementById("button").onclick = function() {

	var firstName = document.getElementById("fName").value;
	var lastName = document.getElementById("lName").value;
	var nickName = document.getElementById("nName").value;

	console.log(firstName + lastName + nickName);
	
		// Find a <table> element with id="myTable":
	var table = document.getElementById("myTable");

	// Create an empty <tr> element and add it to the 1st position of the table:
	var row = table.insertRow(1);

	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);

	var num = 4;

	// Add some text to the new cells:
	cell1.innerHTML = "<b>" + num + "</b>";
	cell2.innerHTML = firstName;
	cell3.innerHTML = lastName;
	cell4.innerHTML = nickName;
	cell5.innerHTML = "<img src='x.svg'>";

	document.getElementById("fName").value = "";
	document.getElementById("fName").style.backgroundColor = "white";
	document.getElementById("lName").value = "";
	document.getElementById("lName").style.backgroundColor = "white";
	document.getElementById("nName").value = "";
	document.getElementById("nName").style.backgroundColor = "white";
}


 