function novidades(){
    let re = document.getElementById("resident");
    let er = document.getElementById("elden");

    if(re.style.display == "none"){
        re.style.display = "block"
        er.style.display = "none"
    }
    else if(er.style.display == "none"){
        er.style.display = "block"
        re.style.display = "none"

    }
}