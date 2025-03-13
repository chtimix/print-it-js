const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Insertion html des bullets du carrousel
let dots = document.querySelector(".dots")
let html ='<div class="dot dot_selected"></div'
function addDot() {
	for (let index = 0; index < slides.length; index++ ) {
		html += '<div class="dot"></div>'
	}
	dots.innerHTML = html
}
addDot()

// Gestion des événements sur le carrousel 
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")

console.log(arrowLeft)
console.log(arrowRight)

arrowLeft.addEventListener("click", () => {
	console.log("tu as cliqué sur la flèche gauche")
})

arrowRight.addEventListener("click", () => {
	console.log("tu as cliqué sur la flèche droite")
}) 

