
function createProduct(_name, _category, _price, image_src) {
    var product = {
        name : _name,
        category : _category,
        price : _price,
        img : image_src
    };
    return product;
}

function __appendElements(main_element, child){
    main_element.appendChild(child);
}

function __updateContentText(element, newText){
    element.textContent = newText;
}

function __createElement(element_tag){
    return document.createElement(element_tag);
}

function appendElement(element_id, product, is_visible){
    var section = document.getElementById(element_id);

    product_div   = __createElement("div");
    product_image = __createElement("img");
    product_name  = __createElement("p");
    product_price = __createElement("p");
    see_more      = __createElement("a");

    __appendElements(section, product_div);

    product_image.classList.add("product_image");
    product_image.setAttribute("src", "images/" + product.img + ".png");

    __updateContentText(see_more, "Ver produto");
    see_more.setAttribute("href", "index.html");

    __updateContentText(product_name, product.name);
    __updateContentText(product_price, product.price.toLocaleString('en',{style: 'currency', currency: 'USD'}));
    
    if(!is_visible){
        product_div.classList.add("invisible");
    }

    product_div.classList.add("product_div");
    product_name.classList.add("product_name");
    product_price.classList.add("product_price");

    __appendElements(product_div, product_image);
    __appendElements(product_div, product_name);
    __appendElements(product_div, product_price);
    __appendElements(product_div, see_more);

}

function appendElementArray(element_id, products, size, visibilityCondition){
    for(var i = 0; i < size; i++){
        appendElement(element_id, products[i], i < visibilityCondition);
    }
}

function startElementsGeneric(products, size, name, category, price, image_src){
    const temp = "123456"
    for(var i = 0; i < size; i++){
        products[i] = createProduct(name, category, price ,image_src);
        image_src = image_src.replace(image_src.charAt(image_src.length - 1).toString(), temp.charAt(i))
    }
}

function main(){

    var firstSec = [];
    var secondSec = [];
    var thirdSec = [];


    startElementsGeneric(firstSec, 6, "ProdutoXYZ", "Star Wars", 60.0, "skill0");
    __updateContentText(document.getElementById("title1"), "Star Wars");

    startElementsGeneric(secondSec, 6, "ProdutoXYZ", "Consoles", 60.0, "section_two0");
    __updateContentText(document.getElementById("title2"), "Consoles");

    startElementsGeneric(thirdSec, 6, "ProdutoXYZ", "Diversos", 60.0, "diversos0");
    __updateContentText(document.getElementById("title3"), "Diversos");

    appendElementArray("first_section", firstSec, 6, 4);
    appendElementArray("second_section", secondSec, 6, 4);
    appendElementArray("third_section", thirdSec, 6, 4);
}

main();
