var firstSec = [];
var secondSec = [];
var thirdSec = [];
var src = "skill0";
var temp = "123456"

for(var i = 0; i < 6; i++){
    firstSec[i] = {
        name : "ProdutoXYZ",
        price : Number.parseFloat(60.0),
        category: "Star Wars",
        img : src
    }
    src = src.replace(src.charAt(5).toString(), temp.charAt(i))
}

src = "skill0";

for(var i = 0; i < 6; i++){
    secondSec[i] = {
        name : "ProdutoXYZ",
        price : Number.parseFloat(60.0),
        category: "Consolos",
        img : src
    }
    src = src.replace(src.charAt(5).toString(), temp.charAt(i))
}

src = "skill0";

for(var i = 0; i < 6; i++){
    thirdSec[i] = {
        name : "ProdutoXYZ",
        price : Number.parseFloat(60.0),
        category: "Diversos",
        img : src
    }
    src = src.replace(src.charAt(5).toString(), temp.charAt(i))
}

//Exibição dos elementos criados na tela
function appendElements(products, size, element_id){

    var sec = document.getElementById(element_id);
    var divs = [];
    var im = [];
    var p_name = [];
    var p_price = [];



    for(var i = 0; i < size; i++){
        
        divs[i] = document.createElement("div");
        sec.appendChild(divs[i]);
    }

    for(var i = 0; i < size; i++){

        im[i] = document.createElement("img");
        
        im[i].classList.add("product_image");
        im[i].setAttribute("src", "images/" + products[i].img + ".png");
        p_name[i] = document.createElement("p");
        p_price[i] = document.createElement("p");

        p_name[i].textContent = products[i].name;
        p_price[i].textContent = products[i].price.toLocaleString('en',{style: 'currency', currency: 'USD'});
        
    }

    for(var i = 0; i < size; i++){
        if(i >= 4){
            divs[i].classList.add("invisible");
        }
        divs[i].classList.add("product_div");
        divs[i].appendChild(im[i]);
        divs[i].appendChild(p_name[i]);
        divs[i].appendChild(p_price[i]);
    }

    for(var i = 0; i < size; i++){
        sec.appendChild(divs[i]);
    }

}

document.getElementById("title1").textContent = firstSec[0].category;
document.getElementById("title2").textContent = secondSec[0].category;
document.getElementById("title3").textContent = thirdSec[0].category;

appendElements(firstSec, firstSec.length, "first_section");
appendElements(secondSec, secondSec.length, "second_section");
appendElements(thirdSec, thirdSec.length, "third_section");
