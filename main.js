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