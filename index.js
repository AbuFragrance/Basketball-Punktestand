let count = 0
let counterDom = document.getElementById("counter")



function plus1 () {
    count += 1
    counterDom.textContent = count
}

function plus2 () {
    count += 2
    counterDom.textContent = count
}

function plus3 () {
    count += 3
    counterDom.textContent = count
}

function zero() {
    count = 0
    counterDom.textContent = count

}



let countGuest = 0
let counterDomGuest = document.getElementById("counter-guest")


function plus1Guest () {
    countGuest += 1
    counterDomGuest.textContent = countGuest
}

function plus2Guest () {
    countGuest += 2
    counterDomGuest.textContent = countGuest
}

function plus3Guest () {
    countGuest += 3
    counterDomGuest.textContent = countGuest
}

function zeroGuest() {
    countGuest = 0
    counterDomGuest.textContent = countGuest

}


function newGame(){

    count = 0
    counterDom.textContent = count

    countGuest = 0
    counterDomGuest.textContent = countGuest

}