let header = document.querySelector('#page-header')
header.style.textAlign = "left"
let dogImages = document.querySelectorAll(".dog-image")
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = "50px"
}

let footer = document.querySelector(".footer")
footer.style.borderStyle = "solid"

let dogDescription = document.querySelectorAll(".dog-description")
for(let i = 0; i < dogDescription.length; i++){
dogDescription[i].style.color = "white"
dogDescription[i].style.borderStyle = "dotted"
}
let h2 = document.querySelector("h2")
h2.style.textAlign = "center"

let body = document.querySelector("body")
body.style.backgroundColor = "gray"
// Select some elements...