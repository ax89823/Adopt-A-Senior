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
	<li><a class="logout" href="home.html" >Logout</a></li></ul>'
	;
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

