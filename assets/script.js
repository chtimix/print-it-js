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

let compteur = 0



let bannerImg = document.querySelector(".banner-img")
let bannerTxt = document.querySelector("#banner p")

arrowLeft.addEventListener("click", () => {
	let dotSelected = document.querySelector(".dot_selected")
    let prevDot = dotSelected.previousSibling
	
	prevDot.className="dot dot_selected"
	dotSelected.className = "dot"

	bannerImg.src="./assets/images/slideshow/"+ slides[compteur-1].image
	bannerTxt.innerHTML=slides[compteur-1].tagLine
	compteur--


})

arrowRight.addEventListener("click", () => {
	let dotSelected = document.querySelector(".dot_selected")
    let nextDot = dotSelected.nextElementSibling 
	
	nextDot.className="dot dot_selected"
	dotSelected.className = "dot"

	bannerImg.src="./assets/images/slideshow/"+ slides[compteur+1].image
	bannerTxt.innerHTML=slides[compteur+1].tagLine
	compteur++
}) 


