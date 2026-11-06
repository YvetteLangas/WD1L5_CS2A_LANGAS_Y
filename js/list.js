// Create the function that adds the item to the list
function addItem() {
    let item = document.getElementById("item_name").value;
    let qty = document.getElementById("item_qty").value;

    // Error handler if blank fields
    if (item === "" || qty === "") {
        alert("Please enter both item details!");
        return;
    }

    // Get the ul element correctly
    let groceryList = document.getElementById("groceryList");

    // Create a new list item via DOM
    let newItem = document.createElement("li");
    newItem.innerHTML = item + " - Qty: " + qty;
    groceryList.appendChild(newItem);

    // Clear input fields after adding a new item
    document.getElementById("item_name").value = "";
    document.getElementById("item_qty").value = "";
}

// Clear the List function placed outside addItem
function clearList() {
    document.getElementById("groceryList").innerHTML = "";
}

//log out function
function logout(){
    localStorage.removeItem("userRecord");//delete
    alert(localStorage.getItem("userRecord"));
    window.location.href ="register.html";
}