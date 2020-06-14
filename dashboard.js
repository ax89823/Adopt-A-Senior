/**
 * 
 */

var navhtml = '<ul>\
	<li><a class="home" href="home.html">Home</a></li>\
	<li><a class="signup" href="signup.html">Sign Up</a></li>\
	<li><a class= "resources" href="resources.html">Resources</a></li>\
	<li><a class="news" href="news.html">Good News</a></li>\
	<li><a class="feedback" href="feedback.html">Feedback</a></li>\
	<li><a class="mydashboard" href="dashboard.html">My Dashboard</a></li>\
	<li><a class="logout" href="home.html" >Logout</a></li></ul>';

var nav = document.getElementsByClassName("main");
nav[0].innerHTML = navhtml;

function showDeliveries() {
	var deliveries = document.getElementById("deliveries");
	deliveries.style.display = 'grid';
	deliveries.style.gridTemplateColumns = 'repeat(2, 1fr)';
	document.getElementById("contact").style.display = 'none';
}

function showContact() {
	document.getElementById("contact").style.display = 'block';
	document.getElementById("deliveries").style.display = 'none';
}

function openMedModal() {
	document.getElementById("addMeds").style.display = "block";
	document.getElementById("overlay").style.display = "block";
}

function closeModal() {
	document.getElementById("addGroceries").style.display = "none";
	document.getElementById("addMeds").style.display = "none";
	document.getElementById("overlay").style.display = "none";
}

function addMedItem() {
	var med = document.createElement("LI");
	var container = document.createElement("DIV")
	var prescription = document.createElement("H4");
	var frequencyLabel = document.createElement("H4");
	frequencyLabel.innerHTML = "Frequency:";
	var frequency = document.createElement("P");
	var refillLabel = document.createElement("H4");
	refillLabel.innerHTML = "Next refill:";
	var refillDate = document.createElement("P");
	var inputList = document.querySelectorAll(".modal-content input");
	prescription.innerHTML =  inputList[0].value;
	frequency.innerHTML = inputList[1].value + " per week";
	var date = new Date();
	date.setTime(date.getTime() + (inputList[2].value/inputList[1].value * 86400000 * 7));
	refillDate.innerHTML = date.toDateString();
	container.appendChild(prescription);
	container.appendChild(frequencyLabel);
	container.appendChild(frequency);
	container.appendChild(refillLabel);
	container.appendChild(refillDate);
	
	med.appendChild(container);
	document.getElementById("med-list").appendChild(med);
	closeModal();
}
function addGroceryItem() {
	var grocery = document.createElement("LI");
	var item = document.getElementById("groceryItem")
	var t = document.createTextNode(item.options[item.selectedIndex].text);
	grocery.appendChild(t);
	document.getElementById("grocery-list").appendChild(grocery);
	closeModal();
}
function openGroceryModal() {
	document.getElementById("addGroceries").style.display = "block";
	document.getElementById("overlay").style.display = "block";
}
