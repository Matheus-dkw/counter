let numero = document.getElementById("numero")

let btnDec = document.getElementById("btn-dec")
let btnRes = document.getElementById("btn-res")
let btnInc = document.getElementById("btn-inc")

let n = 0

function verificaCor(){
    if(n > 0){
        numero.style.color = "blue"
    }else if(n < 0){
        numero.style.color = "red"
    }else{
        numero.style.color = "black"
    }
    
}




btnDec.addEventListener("click", function () {
    /*====  Subtrair ==== */

    n = n - 1
    verificaCor()
    numero.innerHTML = n


})

btnRes.addEventListener("click", function () {
    /*====  Reset ==== */

    n = 0
    verificaCor()
    numero.innerHTML = n
})

btnInc.addEventListener("click", function () {
    /*====  Somar ==== */

    n = n + 1
    verificaCor()
    numero.innerHTML = n
})