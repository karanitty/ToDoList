var username = document.getElementById("username");
var password = document.getElementById("password");


function validation(){
    if ((username.value == 'admin') && (password.value == '12345')){
        return true;
    }
    else{
        var x = document.getElementById("snackbar");

        // Add the "show" class to DIV
        x.className = "show";

        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        return false;
    }
}
