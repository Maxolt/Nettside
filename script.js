let $ = (id) => document.getElementById(id)


$("button").onmouseover = function () {
    $("button").style.top = `${Math.floor(Math.random() * 91)}%`
    $("button").style.left = `${Math.floor(Math.random() * 91)}%`
}