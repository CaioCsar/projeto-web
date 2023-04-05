function novidades(){
    let re = document.getElementById("resident");
    let er = document.getElementById("elden");

    if(re.style.display == "grid"){
        re.style.display = "none"
        er.style.display = "grid"
    }
    else if(er.style.display == "grid"){
        re.style.display = "grid"
        er.style.display = "none"

    }
}

/* FORM */

let btnLimpar = document.getElementById("btnlimpar");
btnLimpar.addEventListener("click", function limpar(){
    let inputnome = document.getElementById("nome");
    let inputemail = document.getElementById("email");
    let inputidade = document.getElementById("idade");
    let inputmsg = document.getElementById("mensagem");

    inputnome.value = ""
    inputemail.value = ""
    inputidade.value = ""
    inputmsg.value = ""
})

function form(){
    let inputnome = document.getElementById("nome");
    let inputemail = document.getElementById("email");
    let inputidade = document.getElementById("idade");
    let inputmsg = document.getElementById("mensagem");
    let form = document.getElementById("form");

    let resultado = [inputnome.value, inputemail.value, inputidade.value, 
    inputmsg.value]
        form.submit()
    console.log(resultado)
}