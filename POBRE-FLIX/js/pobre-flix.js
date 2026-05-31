function login(){
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario == "joao" && senha == "1234"){
        alert("Login Realizado com sucesso!");
        mostrarHome()
        esconderLogin()
    }
}
function logout(){
    let telaHome = document.getElementById("home").style.display = "none";
    let telaLogin = document.getElementById("login").style.display = "block";
}    
function mostrarHome(){
    let telaHome = document.getElementById("home").style.display = "block";
}
function esconderLogin(){
    let telaLogin = document.getElementById("login").style.display = "none";
}    
