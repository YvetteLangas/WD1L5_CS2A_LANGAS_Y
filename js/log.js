//conditional Statement => loob ng function
//get the value save in localStorage
function loginUser(){


let old_user = localStorage.getItem("userRecord");

if(old_user === null) {
    document.getElementById("loginMessage").innerHTML =
    "<h2>No User record found. Kindly Register first";
    return;
}

//split values of the localstorage
let userData = old_user.split(" | "); //this is an array

//retrieve username and password at the loaction of the array
let old_name = userData[0];
let old_uname = userData[3];
let old_pword = userData[5];

//retrieve user input via the login form
let loginuname = document.getElementById("login_uname").value;
let loginpword = document.getElementById("login_pword").value;

//conditonal statement - checking old vs login data
if(loginuname === old_uname && loginpword === old_pword){
    document.getElementById("loginMessage").innerHTML =
    "Welcome" + old_name + "!You may now add an item.";
        //going to move to next page
    window.location.href ="list.html";
} else {
    document.getElementById("loginMessage").innerHTML = "<h2 style='color:red'>Invalid username or password.";
}

}