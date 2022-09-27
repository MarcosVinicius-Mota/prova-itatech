
function __appendElements(main_element, child){
    main_element.appendChild(child);
}

function __updateContentText(element, newText){
    element.textContent = newText;
}

function __createElement(element_tag){
    return document.createElement(element_tag);
}

function __getElementPositionY(element){
    return element.getBoundingClientRect();
}

function __viewCategory(element){
    var coord = element.getBoundingClientRect().top;
    scroll(0, coord - (coord * 0.25));
}

function youCantSearchForItens(){

    const searchContent = document.getElementById("search_bar").value;

    if(searchContent.length == 0){
        alert("Campo de pesquisa vazio");
        return;
    }
    var section = "";

    if(searchContent == "star wars"){
        section = "first_section";
    }
    else if(searchContent == "consoles"){
        section = "second_section";        
    }
    else if(searchContent == "diversos"){
        section = "third_section";
    }
    else{
        alert("Não há produtos cessa categoria");
        return;
    }

    __viewCategory(document.getElementById(section));

    
}

function sendMessage(){
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;

    if(name.length == 0 || message.length == 0)
        alert("Preencha os campos antes de enviar");
    else
        alert("Messagem enviada com sucesso");
}

function youCantSeeMore(){
    alert("Não há mais produtos")
}

function confirmLogin(){

    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;

    if(user.length == 0 || password.length == 0){
        var loginDIV = document.getElementById("login_div");
        
        p = document.getElementById("nulltest");

        if(p == null){
            var p = __createElement("p");
            __updateContentText(p, "Preencha os campos com valores válidos");
            p.id = "nulltest";
            p.style.padding = "10px";
            p.style.color = "red";
            p.style.fontWeight = "bold";

            __appendElements(loginDIV, p);  
        }
    }
    else{
        window.location.href = "index.html";
    }

}



