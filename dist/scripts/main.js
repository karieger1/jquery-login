$(document).on("ready", function() {

function login(e) {

	var email = $("#username").val();
	var password = $("#password").val();

	e.preventDefault();

	if (email ==="aaron@theironyard.com" && password === "password123") {
		window.location.replace = ("http://www.theironyard.com");
	}

	if (email ==="admin@google.com" && password === "pandas") {
		window.location.replace = ("http://www.theironyard.com");
	}

	if (email =="butts@butts.com" && password === "honeycrisp") {
		window.location.replace = ("http://www.theironyard.com");
	}

//errors
	if (email.indexOf("@")=== -1) {
		$("#email-error").html("enter an email address!");
	}

	if(password === "") {
		$("#password-error").html("enter a password!");
	}

	if (email !== "aaron@theironyard.com" || email !== "admin@google.com" || email !== "butts@butts.com") {
		$("#email-error").html("invalid username");
	}

	if(email === "aaron@theironyard.com" && password !== "password123"){
			$("#password-error").html("email does not match password.");
		}
	
	if(email === "admin@google.com" && password !== "pandas"){
			$("#password-error").html("email does not match password.");
		}
	e.preventDefault();

	}

	$("#button").on("click", login);
  
});