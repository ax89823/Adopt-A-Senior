var is_start = true;
var finished = false;
var counter = 0;
var totalpoint = 0;

function getText() { 
	var chat_box = document.getElementById("chat_box");
	var messages = document.getElementById("messages");
	var robot = document.createElement("li");
	var newMessage = document.createElement("li");
	
	console.log(is_start);
	console.log ("totalpoint:" + totalpoint + " counter: " + counter);
	if (is_start && counter == 0) {
		var str = "Hello! Welcome to our symptom checker. Please answer yes or no to our questions and hit the SEND button. Are you experiencing trouble breathing, persistent pain or pressure in the chest, new confusion, inability to wake or saty awake, bluish lips or face?";
		robot.innerHTML = str;
		messages.appendChild(robot);
		chat_box.value = "";
		// messages.appendChild(newMessage)
		is_start = false;
		counter += 1;
		console.log(is_start);
		console.log(counter);
	}

	var val = chat_box.value;
	newMessage.innerHTML = val;
	messages.appendChild(newMessage);
	chat_box.value = "";
	if (val == "yes" && counter == 1) {
		var r1 = document.createElement("li");
		alert("Please call 911 immediately. These are warning signs for COVID-19.");
		finished = true;
		
		
	}
	newMessage.innerHTML = val;
	messages.appendChild(newMessage);
	chat_box.value = "";
	if (val == "no" && counter == 1) {
		var str = "Are you experiencing fever or chills?";
		robot.innerHTML = str;
		messages.appendChild(robot);
		chat_box.value = "";
		// newMessage.innerHTML = chat_box.value;
		// messages.appendChild(newMessage);
		if (val == "yes" && counter == 1) {
			totalpoint += 1;
			counter += 1;
			return;
		}
		if (val = "no" && counter == 1) {
			counter += 1;
			return;
		}
		return;
	}
	newMessage.innerHTML = val;
	messages.appendChild(newMessage);
	chat_box.value = "";
	if (counter == 2) {
		var str = "Are you experiencing a cough?";
		robot.innerHTML = str;
		messages.appendChild(robot);
		chat_box.value = "";
		// newMessage.innerHTML = chat_box.value
		// messages.appendChild(newMessage)
		if (val == "yes") {
			totalpoint += 1;
			counter += 1;
		}
		if (val == "no") {
			counter += 1;
		}
		return;
	}
	newMessage.innerHTML = val;
	messages.appendChild(newMessage);
	chat_box.value = "";
	if (counter == 3) {
		var str = "Are you experiencing shortness of breath or having difficuly breathing?";
		robot.innerHTML = str;
		messages.appendChild(robot);
		chat_box.value = "";
		// newMessage.innerHTML = chat_box.value
		// messages.appendChild(newMessage)
		if (val == "yes") {
			totalpoint += 1;
			counter += 1
			return;
		}
		if (val == "no") {
			counter += 1;
			return;
		}
		return;
	}
	newMessage.innerHTML = val;
	messages.appendChild(newMessage);
	chat_box.value = "";
	if (counter == 4) {
		var str = "Are you experiencing fatigue?";
		robot.innerHTML = str;
		messages.appendChild(robot);
		chat_box.value = "";
		// newMessage.innerHTML = chat_box.value
		// messages.appendChild(newMessage)
		if (val == "yes") {
			totalpoint += 1;
			counter += 1;
			return;
		}
		if (val == "no") {
			counter += 1;
			return;
		}
		return;
	}
	newMessage.innerHTML = val;
	messages.appendChild(newMessage);
	chat_box.value = "";
	if (counter == 5) {
		var str = "Are you experiencing muscle or body aches?";
		robot.innerHTML = str;
		messages.appendChild(robot);
		chat_box.value = "";
		// newMessage.innerHTML = chat_box.value
		// messages.appendChild(newMessage)
		if (val == "yes") {
			totalpoint += 1;
			counter += 1;
			return;
		}
		if (val = "no") {
			counter += 1;
			return;
		}
		return;
	}
	newMessage.innerHTML = val;
	messages.appendChild(newMessage);
	chat_box.value = "";
	if (counter == 6) {
		var str = "Are you experiencing new loss of taste or smell?";
		robot.innerHTML = str;
		messages.appendChild(robot);
		chat_box.value = "";
		// newMessage.innerHTML = chat_box.value
		// messages.appendChild(newMessage)
		if (val == "yes") {
			totalpoint += 1;
			counter += 1;
			return;
		}
		if (val = "no") {
			counter += 1;
			return;
		}
		return;
	}
	newMessage.innerHTML = val;
	messages.appendChild(newMessage);
	chat_box.value = "";
	if (counter == 7) {
		var str = "Are you experiencing a sore throat?";
		robot.innerHTML = str;
		messages.appendChild(robot);
		chat_box.value = "";
		// newMessage.innerHTML = chat_box.value
		// messages.appendChild(newMessage)
		if (val == "yes") {
			totalpoint += 1;
			counter += 1;
			return;
		}
		if (val = "no") {
			counter += 1;
			return;
		}
		return;
	}
	newMessage.innerHTML = val;
	messages.appendChild(newMessage);
	chat_box.value = "";
	if (counter == 8) {
		var str = "Are you experiencing congestion or a runny nose?";
		robot.innerHTML = str;
		messages.appendChild(robot);
		chat_box.value = "";
		// newMessage.innerHTML = chat_box.value
		// messages.appendChild(newMessage)
		if (val == "yes") {
			totalpoint += 1;
			counter += 1;
			return;
		}
		if (val = "no") {
			counter += 1;
			return;
		}
		return;
	}
	newMessage.innerHTML = val;
	messages.appendChild(newMessage);
	chat_box.value = "";
	if (counter == 9) {
		var str = "Are you experiencing nausea?";
		robot.innerHTML = str;
		messages.appendChild(robot);
		chat_box.value = "";
		// newMessage.innerHTML = chat_box.value
		// messages.appendChild(newMessage)
		if (val == "yes") {
			totalpoint += 1;
			counter += 1;
			return;
		} else if (val == "no") {
			counter += 1;
			return;
		}
	}
	newMessage.innerHTML = val;
	messages.appendChild(newMessage);
	chat_box.value = "";
	if (counter == 10) {
		var str = "Are you experiencing diarrhea?";
		robot.innerHTML = str;
		messages.appendChild(robot);
		chat_box.value = "";
		// newMessage.innerHTML = chat_box.value
		// messages.appendChild(newMessage)
		if (val == "yes") {
			totalpoint += 1;
			counter += 1;
			return;
		}
		if (val == "no") {
			counter += 1;
			return;
		}
	}
	if (totalpoint < 6 && counter == 11) {
		console.log("in");
		alert(" Symptoms show that you may be experiencing a high fever but it may not be COVID-19. Please check with your doctor to make sure.");
		finished = true;
	}
	if (totalpoint >= 6 && counter == 11) {
		
		console.log("in");
		alert("Symptoms show that you may have COVID-19. Please make sure with your doctor or call 911 right away.");
		finished = true;
	}
	if (finished) {
		document.getElementById("symptom-checker").style.display = 'none';
		document.getElementById("thank-you").style.display = 'block';
	}
}

