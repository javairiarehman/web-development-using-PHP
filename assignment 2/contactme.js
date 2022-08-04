


function ValidateEmail() {
    var email = document.getElementById("txtEmail").value;
    var lblError = document.getElementById("lblError");
    lblError.innerHTML = "";
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test(email)) {
        lblError.innerHTML = "Invalid email address.";
    }
    else{
        lblError.innerHTML = "valid email address.";
    }
}



function ValidateSender() {
    var email = document.getElementById("txtName").value;
    var lblError = document.getElementById("lblError1");
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    lblError.innerHTML = "";
        if(email.length<3 || email.length>8){
        lblError.innerHTML = "sender name should be of more than 4 characters and less than 100 charachters.";
        }
        else{
            lblError.innerHTML = "valid email address.";
        }
   
}

function ValidateMessage() {
    var email = document.getElementById("txtmessage").value;
    var lblError = document.getElementById("lblError2");
    lblError.innerHTML = "";
    if(email.match(/(\w+)/g).length<3){
        lblError.innerHTML = "message should have minimum 3 words";
        }
        else{
            lblError.innerHTML = "thanks for responding";
        }
}


