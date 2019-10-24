$(document).ready(function() {
	
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
		{
			username:"a",
			password:"a"
		}

	];

	$("#loginBtn").click(function(){
		for (var i =0; i <= users.length; i++){
	         if(users[i].username == $('#uNameInput').val() && users[i].password == $('#pWordInput').val()){
	            window.location.replace("home.html");
	         } 
	         else {
	         	$('#loginIssue').html("<div class='alert alert-danger' role='alert'>Username and Password do not match</div>");
	         }
	         
		}
		if ($('#uNameInput').val() == ""){
	    	$('#loginIssue').html("<div class='alert alert-danger' role='alert'>Please enter your username</div>");
	    } else if ($('#pWordInput').val() == ""){
            $('#loginIssue').html("<div class='alert alert-danger' role='alert'>Please enter your password</div>");
        }
	});
});