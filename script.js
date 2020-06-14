/**
 * 
 */
function showDeliveries(){
	var deliveries = document.getElementById("deliveries");
deliveries.style.display = 'grid';
deliveries.style.gridTemplateColumns ='repeat(2, 1fr)';
document.getElementById("contact").style.display = 'none';
}

function showContact(){
	document.getElementById("contact").style.display = 'block';
	document.getElementById("deliveries").style.display = 'none';
}

