class Product{

    constructor(nome, preco, descricao){
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }
}


function enableDarkTheme(){

    alert("INSANO");

    var a = document.getElementById("header");

    if(a.style.background === "white"){
        a.style.background = "black"
    }
    else{
        a.style.background = "white"
    }
}
