$( document ).ready(function() {
var loginBtn = document.getElementById("loginInput");
var userInput = document.getElementById("userInput");
var passInput = document.getElementById("passInput");

$('#userInput').change(function(){
            userInput = $('#userInput').val();
            return(userInput);
     });
$('#passInput').change(function(){
            passInput = $('#passInput').val();
            return(passInput);
     });


var users = [
	{
		username:"Bren519",
		password:"beanPizza"
	},
	{
		username:"Weston714",
		password:"forehead"
	},
	{
		username:"Squad32Codes",
		password:"stemCGI2020"
	},
	{
		username:"JaydonHuval",
		password:"doorKnob"
	},

];

loginBtn.onclick = function(){
for (var i =0; i < users.length; i++){

         if(users[i].username === userInput.value && users[i].password === passInput.value){
            window.location.replace("home.html");
         } else if (userInput.value === ""){
            document.getElementById("loginIssue").innerHTML = "<div class='alert alert-danger' role='alert'>Please enter your username</div>";
         } else if (passInput.value === ""){
            document.getElementById("loginIssue").innerHTML = "<div class='alert alert-danger' role='alert'>Please enter your password</div>";
         } else {
            document.getElementById("loginIssue").innerHTML = "<div class='alert alert-danger' role='alert'> Username or password does not match</div>";
         }
}
}
})