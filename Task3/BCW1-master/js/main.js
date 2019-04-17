'use strict';

const firstName = document.getElementById('firstN').value;
const lastName = document.getElementById('lastN').value;
const email = document.getElementById('email').value;
const phoneNumber = document.getElementById('phone').value;
const address = document.getElementById('address').value;
const postCode = document.getElementById('postCode').value;
const password = document.getElementById('pswd').value;

const formValidation = () => {
    if (firstName == "" && lastName == "") {
        alert("Please enter required fields");
        event.preventDefault();
    };

    if (password == "") {
        alert("Please enter your passowrd");
        event.preventDefault();
    }

    if (email != ".+@.+") {
        alert("Please enter a valid email");
        event.preventDefault();
    };


    if (phoneNumber != "[\+358]\d{12}") {
        alert("Phone number must be in the form of +358123456789")
        event.preventDefault();
    };

    if (postCode.length != 5) {
        alert("Invalid postal code");
        event.preventDefault();
    };
};