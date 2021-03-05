function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function validate() {
    const email = document.getElementById("email").value;
    const emailCheck = document.getElementById("emailCheck");
    const emailValidation = document.getElementById("emailValidation");
    const shelbyForm = document.getElementById("shelby__form");
    emailValidation.innerHTML = "";
    if(validateEmail(email)) {
        emailCheck.style.color = "#19ad5e";
    }else {
        emailCheck.style.color = "#de3e3e";
        emailValidation.innerHTML = "*Not a valid email.";
        shelbyForm.style.marginBottom = "16px";
    }
    return false;
}

