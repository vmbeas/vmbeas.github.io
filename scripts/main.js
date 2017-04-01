// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/v1.jpeg') {
        myImage.setAttribute('src', 'images/v2.jpeg');
    } else {
        myImage.setAttribute('src', 'images/v1.jpeg');
    }
}

// Personalized message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = "Hello, " + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "Hello, " + storedName;
}

myButton.onclick = function() {
    setUserName();
}