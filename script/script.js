const btn = document.querySelector("#btnLogin");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");

(()=>{
    let usuario = localStorage.getItem("usuario");
    if(usuario){
        window.location.href = "http://www.oul.com.br";
    }
})

btn.onclick = (e) =>{
    let usuario = inputUsuario.value;
    let senha = inputSenha.value;
    if(!usuario && !senha){
        inputUsuario.focus();
        return;
    }
    if(usuario === "vitor"){
        if(senha === "123"){
            localStorage.setItem("usuario",usuario);
            window.location.href = "http://oul.com.br";
        }else{
            inputUsuario.focus();
        }
    }
}