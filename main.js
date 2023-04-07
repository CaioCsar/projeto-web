/* alternar paginas em novidades */

function novidades() {
    let re = document.getElementById("resident");
    let er = document.getElementById("elden");

    if (re.style.display == "grid") {
        re.style.display = "none"
        er.style.display = "grid"
    }
    else if (er.style.display == "grid") {
        re.style.display = "grid"
        er.style.display = "none"

    }
}

/* VALIDA CPF */

function TestaCPF() {
    let cpf = document.getElementById("cpf");
    var Soma;
    var Resto;
    Soma = 0;
    if(cpf.value !== ""){

        if (cpf.value == "00000000000") return alert("CPF inválido");
      
        for (i=1; i<=9; i++) Soma = Soma + parseInt(cpf.value.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
      
          if ((Resto == 10) || (Resto == 11))  Resto = 0;
          if (Resto != parseInt(cpf.value.substring(9, 10)) ) return alert("CPF inválido"), cpf.value = "";
      
        Soma = 0;
          for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.value.substring(i-1, i)) * (12 - i);
          Resto = (Soma * 10) % 11;
      
          if ((Resto == 10) || (Resto == 11))  Resto = 0;
          if (Resto != parseInt((cpf.value).substring(10, 11) ) ) return alert("CPF inválido"), cpf.value = "";
          return true;
    }
}

/* FORM */

let btnLimpar = document.getElementById("btnlimpar");

btnLimpar.addEventListener("click", function limpar() {

    let inputnome = document.getElementById("nome");
    let inputemail = document.getElementById("email");
    let inputidade = document.getElementById("idade");
    let inputmsg = document.getElementById("mensagem");
    let masculino = document.getElementById("masc");
    let feminino = document.getElementById("fem");
    let cpf = document.getElementById("cpf");
    let senha = document.getElementById("senha");
    let youtubecheck = document.getElementById("checkbox1");
    let sitecheck = document.getElementById("checkbox2");
    let outroscheck = document.getElementById("checkbox3");

    inputnome.value = "";
    inputemail.value = "";
    inputidade.value = "";
    inputmsg.value = "";
    masculino.checked = false;
    feminino.checked = false;
    cpf.value = "";
    senha.value = "";
    youtubecheck.checked = false;
    sitecheck.checked = false;
    outroscheck.checked = false;
})

function formresult() {

    let sexo = document.getElementsByName("genero");

    if (sexo[0].checked) {
        sexo.value = "Masculino"
    } else if (sexo[1].checked) {
        sexo.value = "Feminino"
    }

    let inputnome = document.getElementById("nome");
    let inputemail = document.getElementById("email");
    let inputidade = document.getElementById("idade");
    let inputmsg = document.getElementById("mensagem");
    let cpf = document.getElementById("cpf");
    let senha = document.getElementById("senha");
    let youtubecheck = document.getElementById("checkbox1");
    let sitecheck = document.getElementById("checkbox2");
    let outroscheck = document.getElementById("checkbox3");

    let midia = ""
    if(youtubecheck.checked){
        midia += youtubecheck.value + " "
    }
    if(sitecheck.checked){
        midia += sitecheck.value + " "
    }
    if(outroscheck.checked){
        midia += outroscheck.value + " "
    }

    let resultado = {
        Nome: inputnome.value,
        email: inputemail.value,
        Idade: inputidade.value,
        Msg: inputmsg.value,
        Sexo: sexo.value,
        CPF: cpf.value,
        Senha: senha.value,
        Mídias: midia,
    }

    console.log(resultado)
}

