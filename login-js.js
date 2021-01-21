
/*function login() {
    let username= document.getElementById('username').value;
    let password= document.getElementById('password').value;
    if (username == "admin"){
        if (password="123"){
            alert ("Login successfully");
            window.location = "wallet.html";

        }else {
            alert("password wrong!!!");
        }
    }else {
        alert("username wrong!!!");
    }

}*/
let attempt =5;
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "admin" && password == "123") {
        alert("Login successfully");
        window.location = "wallet.html";
        return false;
    }else {
        attempt--;
        alert("You have left "+attempt+" attempt");
    }
    if (acount ==0){
        document.getElementById('username').disabled=true;
        document.getElementById('password').disabled=true;
        document.getElementById('submit').disabled=true;
        return false;
    }

}
