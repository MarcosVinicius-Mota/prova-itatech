
//Quase que um construtor de classe. Cria uma variável composta e retorna
function createProduct(_name, _category, _price, image_src) {
    var product = {
        name : _name,
        category : _category,
        price : _price,
        img : image_src
    };
    return product;
}

//Aqui ocorre a atualização do html
function appendElement(element_id, product, is_visible){

    //aqui ocorre a seleção da seção
    var section = document.getElementById(element_id);

    //Criação de uma div para englobar tudo
    product_div   = __createElement("div");
    //criação de uma tag de iamgem
    product_image = __createElement("img");
    //criação do <p> do nome do produto
    product_name  = __createElement("p");
    //criação do <p> do preço do produto
    product_price = __createElement("p");
    //ver detalhes
    see_more      = __createElement("a");

    //A div passa a ser filha da section
    __appendChild(section, product_div);

    //adição da classe product_image para as imagens. Lá tem as dimensões da imagem
    product_image.classList.add("product_image");
    //jogando o atributo src na imagem
    product_image.setAttribute("src", "images/" + product.img + ".png");

    __updateContentText(see_more, "Ver produto");
    see_more.setAttribute("href", "index.html");

    //tag do nome recebe o texto com o nome do produto
    __updateContentText(product_name, product.name);
    //tag do preço recebe o preço com o padrão de moeda americano
    __updateContentText(product_price, product.price.toLocaleString('en',{style: 'currency', currency: 'USD'}));
    
    //os ultimos 2 elementos terão essa classe para eles sumirem quando a tela for pequena
    if(!is_visible){
        product_div.classList.add("invisible");
    }

    //Jogando classes nos elementos
    product_div.classList.add("product_div");
    product_name.classList.add("product_name");
    product_price.classList.add("product_price");

    //Todas as tags entram em div
    __appendChild(product_div, product_image);
    __appendChild(product_div, product_name);
    __appendChild(product_div, product_price);
    __appendChild(product_div, see_more);

}
//função para chamar appendElement, só que em um array
function appendElementArray(element_id, products, size, visibilityCondition){
    for(var i = 0; i < size; i++){
        appendElement(element_id, products[i], i < visibilityCondition);
    }
}

//Função para iniciar os elementos de forma genérica
//recebe o array de produtos vazio, o tamanho dele, e os elementos do produtos
function startElementsGeneric(products, size, name, category, price, image_src){
    const temp = "123456";
    for(var i = 0; i < size; i++){
        //cria o produto e joga no array
        products[i] = createProduct(name, category, price ,image_src);

        //O elemento image_src tem apenas o ultimo caractere diferente em cada uma das seções
        //O objetivos dessa linha é pegar o número que está no final do nome da imagem e atribuir uma unidade a mais, aí na próxima criação de produto, será outra iamgem
        //Ao abrir a pasta de imagens, ficará tudo mais claro
        image_src = image_src.replace(image_src.charAt(image_src.length - 1), temp.charAt(i));
    }
}

function main(){

    //vetores com cada umas das seções
    var firstSec = [];
    var secondSec = [];
    var thirdSec = [];

    //joga elementos padrões em casa um das seções
    startElementsGeneric(firstSec, 6, "ProdutoXYZ", "Star Wars", 60.0, "skill0");
    __updateContentText(document.getElementById("title1"), "Star Wars");

    startElementsGeneric(secondSec, 6, "ProdutoXYZ", "Consoles", 60.0, "section_two0");
    __updateContentText(document.getElementById("title2"), "Consoles");

    startElementsGeneric(thirdSec, 6, "ProdutoXYZ", "Diversos", 60.0, "diversos0");
    __updateContentText(document.getElementById("title3"), "Diversos");

    //ordem : id , array, tamanho, a partir do qual elemento ele passa a ser invisivel
    appendElementArray("first_section", firstSec, 6, 4);
    appendElementArray("second_section", secondSec, 6, 4);
    appendElementArray("third_section", thirdSec, 6, 4);
}


main();
