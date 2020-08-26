let plus = document.getElementsByClassName("plus-btn")
let minus = document.getElementsByClassName("minus-btn")
let qte = document.querySelectorAll(".qte")
let price = document.getElementsByClassName("prx")
let heart= document.getElementsByClassName("fa-heart")
let somme= document.getElementsByClassName("totl")
let trash= document.getElementsByClassName("fa-times")
let divv = document.getElementsByClassName("divv")


for (let i=0 ; i<plus.length; i++) {
    plus[i].addEventListener("click", function (){
        qte[i].innerHTML++ 
        totale();  
    })
}

for (let i=0 ; i<minus.length; i++) {
    minus[i].addEventListener("click", function (){
        if(qte[i].innerHTML>0)
        qte[i].innerHTML--
        totale();
    })
}

function totale(){
    let somme = 0
    for(let i=0; i<price.length; i++) {
        somme = somme + parseInt(price[i].innerHTML)* parseInt (qte[i].innerHTML)
    }
    document.querySelector('.totl').innerHTML = somme
}

for(let i=0; i<heart.length; i++) {
    heart[i].addEventListener("click", function(){
        if(heart[i].style.color=="red") {
        heart[i].style.color="black"}
        else{heart[i].style.color="red"}
    })
}

for(let i=0; i<trash.length; i++) {
    trash[i].addEventListener("click", function(){
        var elem = document.querySelector('.divv');
        elem.parentNode.removeChild(elem);
    })
}