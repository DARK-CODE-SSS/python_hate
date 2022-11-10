var last_letter, user_input;
let user_input;

user_input=document.getElementById("input").value;
last_letter = user_input.slice(-1);

if (last_letter === "s") {
  console.log("If " + user_input + " have a million haters, I'm one of them. \n If " + user_input + " have just one hater, I'm that one single hater \n If " + user_input + " have no haters, that means I'm no longer alive. \n If the entire world loves " + user_input + ", I hate the entire world. \n Till my last breath, I will hate " + user_input);
} else {
  console.log("If " + user_input + " has a million haters, I'm one of them. \n If " + user_input + " has just one hater, I'm that one single hater \n If " + user_input + " has no haters, that means I'm no longer alive. \n If the entire world loves " + user_input + ", I hate the entire world. \n Till my last breath, I will hate " + user_input);
}
