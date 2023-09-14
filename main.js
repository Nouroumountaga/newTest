var nomUserV = " NourouMount@g@Nd@o5@gmail.com ";
var passwordV = "0xymor0405@"
function anonyme(){
    window.location.href = "admin.html"
}
document.querySelector('#submit').addEventListener('click',red)
function red(){
    var nomUser = document.querySelector('#nomUser').value;
    var password = document.querySelector("#password").value;
    if(nomUser === nomUserV && password ===  passwordV + " PwdV*2 "){
        anonyme();
        nomUser = "";
        password = ""
    }else{
        alert("erreur d'identification")
    }
}
