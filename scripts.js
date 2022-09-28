
//Algumas funções para transformar métodos de objeto em estáticos <Fica um pouco mais bonito kkkk>
function __appendChild(main_element, child){
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

//Função para dar scroll até um certo ponto da página. Ela tende a deixar o elemento na posição 25% da tela.
function __viewCategory(element){
    var coord = element.getBoundingClientRect().top;
    scroll(0, coord - (coord * 0.25));
}

//Função para comparar um certo numero de caracteres em duas strings, a partir de um certo índice
function compareString(string1, string2, startFrom, numberOfCharacters){
    var j = 0;
    //sempre começando do indice escolhido até o tamanho da segunda string
    //Essa soma serve pra quando o índice inicial for maior que a string2.
    //Imagine a seguite sitação; var i = 5; i < 4; i++, isso pode ocorrer sem a soma
    //Com a soma, seria; var i = 5; i < 5 + 4; i++;
    for(var i = startFrom; i < numberOfCharacters + startFrom; i++){
        if(string1[i] != string2[j++])
            return false;
    }
    return true;
}

//Retorna de a string2 está contida na string1
function subString(string1, string2){
    
    //Esse for vai controlar qual posição da string vai ser comparada na função compareString
    for(var i = 0; i < string1.length - string2.length + 1; i++){
        //A comparação sempre vai ter como base o tamanho da segunda string
        if(compareString(string1, string2, i, string2.length))
            return true;
    }
    return false;
}

//Função apenas para dar uma interação "divertida" na página
function youCantSearchForItens(){

    //Conteúdo da caixa de texto
    const searchContent = document.getElementById("search_bar").value.toLowerCase();
    
    if(searchContent.length == 0){
        alert("Campo de pesquisa vazio");
        return;
    }
    var section = "";

    if(subString("star wars", searchContent)){
        section = "first_section";
    }
    else if(subString("consoles", searchContent)){
        section = "second_section";        
    }
    else if(subString("diversos", searchContent)){
        section = "third_section";
    }
    else{
        alert("Não há produtos cessa categoria");
        return;
    }

    //Função de dar scroll sendo chama no elemento que tem o ID da variavel section
    __viewCategory(document.getElementById(section));
}

//pequena interação para dar aviso ao enviar mensagem
function sendMessage(){
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;

    if(name.length == 0 || message.length == 0)
        alert("Preencha os campos antes de enviar");
    else
        alert("Messagem enviada com sucesso");
}

//Ao clicar em ver mais, vc irá se deparar com a triste situação de não ter mais produtos
function youCantSeeMore(){
    alert("Não há mais produtos")
}

//Função para forçar que os campos de login sejam preenchidos
function confirmLogin(){

    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;

    //Se algum dos campos estiverem vazios, será criado um <p> para dar uma regulagem ao usuário informando que os campos devem ser preenchidos
    if(user.length == 0 || password.length == 0){

        var loginDIV = document.getElementById("login_div");
        
        //Aqui ocorre uma tentativa de pegar o parágrafo do aviso
        p = document.getElementById("nulltest");

        //Caso seja null, ele cria o elemento, atribrui seus estilos e seu id
        //Se tirar esse teste, ele cria toda vez que clicar no botão, ao invés de só uma vez
        if(p == null){
            var p = __createElement("p");
            __updateContentText(p, "Preencha os campos com valores válidos");
            p.id = "nulltest";
            p.style.padding = "10px";
            p.style.color = "red";
            p.style.fontWeight = "bold";

            // p passa a ser filho de loginDIV
            __appendChild(loginDIV, p);  
        }
    }
    //Caso esteja tudo correto, vc vai pra pagina de login
    else{
        window.location.href = "index.html";
    }

}



