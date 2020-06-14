// var str = "Hello! Welcome to our symptom checker."
// var str = "Please anwere yes or no to our questions."
// var y = prompt(" Are you expereincing trouble breathing, persistent pain or pressure in the chest, new confusion, inability to wake or saty awake, Bluish lips or face?")
// if y == yes{
//         var str = "Please call 911 Immediately. These are warning signs for COVID-19. "
// }
// if y == no{
//         z= prompt("Are you experiencing fever or chills?")
//         if z == yes{
//                 var totalpoint= 1
//         } else if z == no {
//                 var totalpoint = 0
//         }
//         var z = prompt("Are you experiencing a cough?")
//         if z == yes{
//                 var totalpoint= totalpoint + 1
//         } else if z == no {
//                 var totalpoint = totalpoint + 0
//         }
//         var z = prompt("Are you experiencing shortness of breath or having difficuly breathing?")
//         if z == yes{
//                 var totalpoint= totalpoint + 1
//         } else if z == no {
//                 var totalpoint = totalpoint + 0
//         }
//         var z = prompt("Are you experiencing fatigue?")
//         if z == yes{
//                 var totalpoint= totalpoint + 1
//         } else if z == no {
//                 var totalpoint = totalpoint + 0
//         }
//         var z = prompt("Are you experiencing muscle or body aches?")
//         if z == yes{
//                 var totalpoint= totalpoint + 1
//         } else if z == no {
//                 var totalpoint = totalpoint + 0
//         }
//         var z = prompt("Are you experiencing new loss of taste or smell")
//         if z == yes{
//                 var totalpoint= totalpoint + 1
//         } else if z == no {
//                 var totalpoint = totalpoint + 0
//         }
//         var z = prompt("Are you experiencing a sore throat?")
//         if z == yes{
//                 var totalpoint= totalpoint + 1
//         } else if z == no {
//                 var totalpoint = totalpoint + 0
//         }
//         var z = prompt("Are you experiencing congestion or a runny nose?")
//         if z == yes{
//                 var totalpoint= totalpoint + 1
//         } else if z == no {
//                 var totalpoint = totalpoint + 0
//         }
//         var z = prompt("Are you experiencing Nausea?")
//         if z == yes{
//                 var totalpoint= totalpoint + 1
//         } else if z == no {
//                 var totalpoint = totalpoint + 0
//         }
//         var z = prompt("Are you experiencing Diarrhea?")
//         if z == yes{
//                 var totalpoint= totalpoint + 1
//         } else if z == no {
//                 var totalpoint = totalpoint + 0
//         }
// }
//
// if totalpoint < 6{
//         var str = " Symptoms show that you may be experiencing a high fever but it may not be COVID-19. Please check with your doctor to make sure."
// }
// if totalpoint > 6{
//         var str = "Symptoms show that you may have COVID-19. Please make sure with your doctor or call 911 right away."
// }

        //newMessage.innerHTML = chat_box.value;
        //messages.appendChild(newMessage);

        // var str = "Chat Helper: Hello! Welcome to our symptom checker."

function getText() {
        var chat_box = document.getElementById("chat_box");
        var messages = document.getElementById("messages");
        //var robot = document.createElement("li");
        var newMessage = document.createElement("li");
        var str = "Hello! Welcome to our symptom checker.Please answer yes or no to our questions.Are you expereincing trouble breathing, persistent pain or pressure in the chest, new confusion, inability to wake or saty awake, Bluish lips or face?";
        //robot_prompt();
        if (chat_box.value == "yes") {
                var str = "Please call 911 Immediately. These are warning signs for COVID-19.";
                //robot_prompt();
        }
        if (chat_box.value == "no") {
                var str = "Are you experiencing fever or chills?";
                //robot_prompt()
                newMessage.innerHTML = chat_box.value
                messages.appendChild(newMessage)
                if (chat_box.value == "yes") {
                        var totalpoint = 1;
                }
                if (chat_box.value = "no") {
                        var totalpoint = 0;
                }
                var str = "Are you experiencing a cough?"
                //robot_prompt()
                newMessage.innerHTML = chat_box.value
                messages.appendChild(newMessage)
                if (chat_box.value == "yes") {
                        var totalpoint = totalpoint + 1;
                }
                if (chat_box.value = "no"){
                        var totalpoint = totalpoint + 0;
                }
                var str = "Are you experiencing shortness of breath or having difficuly breathing?"
                //robot_prompt()
                newMessage.innerHTML = chat_box.value
                messages.appendChild(newMessage)
                if (chat_box.value == "yes") {
                        var totalpoint = totalpoint + 1;
                }
                if (chat_box.value = "no") {
                        var totalpoint = totalpoint + 0;
                }
                var str = "Are you experiencing fatigue?"
                //robot_prompt()
                newMessage.innerHTML = chat_box.value
                messages.appendChild(newMessage)
                if (chat_box.value == "yes") {
                        var totalpoint = totalpoint + 1;
                }
                if (chat_box.value = "no") {
                        var totalpoint = totalpoint + 0;
                }
                var str = "Are you experiencing muscle or body aches?"
                //robot_prompt()
                newMessage.innerHTML = chat_box.value
                messages.appendChild(newMessage)
                if (chat_box.value == "yes") {
                        var totalpoint = totalpoint + 1;
                }
                if (chat_box.value = "no") {
                        var totalpoint = totalpoint + 0;
                }
                var str = "Are you experiencing new loss of taste or smell?"
                //robot_prompt()
                newMessage.innerHTML = chat_box.value
                messages.appendChild(newMessage)
                if (chat_box.value == "yes") {
                        var totalpoint = totalpoint + 1;
                }
                if (chat_box.value = "no") {
                        var totalpoint = totalpoint + 0;
                }
                var str = "Are you experiencing a sore throat?"
                //robot_prompt()
                newMessage.innerHTML = chat_box.value
                messages.appendChild(newMessage)
                if (chat_box.value == "yes") {
                        var totalpoint = totalpoint + 1;
                }
                if (chat_box.value = "no") {
                        var totalpoint = totalpoint + 0;
                }
                var str = "Are you experiencing congestion or a runny nose?"
                //robot_prompt()
                newMessage.innerHTML = chat_box.value
                messages.appendChild(newMessage)
                if (chat_box.value == "yes") {
                        var totalpoint = totalpoint + 1;
                }
                if (chat_box.value = "no") {
                        var totalpoint = totalpoint + 0;
                }
                var str = "Are you experiencing Nausea?"
                //robot_prompt()
                newMessage.innerHTML = chat_box.value
                messages.appendChild(newMessage)
                if (chat_box.value == "yes") {
                        var totalpoint = totalpoint + 1;
                }
                if (chat_box.value = "no") {
                        var totalpoint = totalpoint + 0;
                }
                var str = "Are you experiencing Diarrhea?"
                //robot_prompt()
                newMessage.innerHTML = chat_box.value
                messages.appendChild(newMessage)
                if (chat_box.value == "yes") {
                        var totalpoint = totalpoint + 1;
                }
                if (chat_box.value = "no") {
                        var totalpoint = totalpoint + 0;
                }
                if (totalpoint < 6) {
                         var str = " Symptoms show that you may be experiencing a high fever but it may not be COVID-19. Please check with your doctor to make sure.";
                }
                if (totalpoint > 6) {
                        var str = "Symptoms show that you may have COVID-19. Please make sure with your doctor or call 911 right away.";
                }
        }
}

function robot_prompt() {
        //robot.innerHTML = str;
        //messages.appendChild(robot);
        //chat_box.value = "";
}
getText()
