// Store value of email field
var email = $('#signup-email').val();
// Regex
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
e.preventDefault();
if( !email.length <= 0 && emailReg.test( email )) {
	// Success
} else {
	// Fail
}