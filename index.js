let point = document.getElementById("score")
let point2 = document.getElementById("score1")
let p1 = 0
let p2 = 0

function plus1 () {
    p1 += 1
    point.textContent = p1
    
}
function plus2 () {
    p1 += 2
    point.textContent = p1
}

function plus3 () {
    p1 += 3
    point.textContent = p1
}

function plus1a () {
    p2+= 1
    point2.textContent = p2
}

function plus2a () {
    p2 += 2
    point2.textContent = p2
}

function plus3a () {
    p2 += 3
    point2.textContent = p2
}

function clik () {
    p2 = 0
    p1 = 0
    point2.textContent = p2
    point.textContent = p1
}