// generate random password
function generate(){

    // set password length and complexity
    let complexity = document.getElementById("slider").value;

    //possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";

    let password = "";

    // for loop to choose password characters
    for (var i = 0; i<= complexity; i++ ){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to prev password section
    document.getElementById("lastNums").innerHTML += password + "<br />";

}

//set default length to 25
document.getElementById("length").innerHTML = "Length: 67";

//set length to slider position
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 8){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    } else {
        document.getElementById("length").innerHTML = "Length: 8";
    }

}

//function to copy password
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");

}