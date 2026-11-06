//1. Get user details, concatenate, save to localstorage
function saveUserDetails(){
    let first_name = document.getElementById("fname").value;
    let last_name = document.getElementById("lname").value;
    let address = document.getElementById("address").value;
    let user_name = document.getElementById("uname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pword").value;
    //make sure that all blanks are filled
    //HTML tag INPUT "required"
    //OR make our pwn remark
    if (first_name === "" || last_name === "" || address === "" 
        || user_name === "" || email === "" || password ===""
    ){
        document.getElementById("regMessage").innerHTML
        ="<h1 style='color:red'>Please Complete Details</h1>"
        return;
    }
    //String Concatenate all details
    let userDetails = first_name + " | " + last_name + " | " + address + " | " +
                    user_name + " | " + email + " | " + password;

    
//save to local storage (to store setitem/ to retrieve getItem)
    localStorage.setItem("userRecord", userDetails);

    document.getElementById("regMessage").innerHTML = 
    "<h3 style='color:green'></h3>";

    alert(localStorage.getItem("userRecord"));

    //going to move to next page
    window.location.href ="login.html";

}