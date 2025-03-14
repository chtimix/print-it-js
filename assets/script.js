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
const dots = document.querySelector(".dots")
	let html =""
	let is_selected
	for (let index = 0; index < slides.length; index++ ) {
		is_selected = ""
		if (index==0) is_selected = " dot_selected";
		html += '<div class="dot '+is_selected+'" data-number="'+index+'"></div>'
		
	}
	dots.innerHTML = html

// Gestion des événements sur le carrousel 
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")

let current_index = 0

const bannerImg = document.querySelector(".banner-img")

const bannerTxt = document.querySelector("#banner p")

arrowLeft.addEventListener("click", () => {
	
	let prevIndex = current_index -1
	if(prevIndex < 0) {
		prevIndex = slides.length - 1
	}
	document.querySelector('.dot[data-number="'+prevIndex+'"]').classList.add("dot_selected");
	document.querySelector('.dot[data-number="'+current_index+'"]').classList.remove("dot_selected");
	current_index=prevIndex
	

	bannerImg.src="./assets/images/slideshow/"+ slides[current_index].image
	bannerTxt.innerHTML=slides[current_index].tagLine
})


arrowRight.addEventListener("click", () => {
	let nextIndex = current_index + 1
	if(nextIndex > slides.length -1) {
		nextIndex = 0
	}
	document.querySelector('.dot[data-number="'+nextIndex+'"]').classList.add("dot_selected");
	document.querySelector('.dot[data-number="'+current_index+'"]').classList.remove("dot_selected");
	current_index=nextIndex
	

	bannerImg.src="./assets/images/slideshow/"+ slides[current_index].image
	bannerTxt.innerHTML=slides[current_index].tagLine
	

}) 

let dom_dots = document.querySelectorAll(".dot");
dom_dots.forEach((dot) => {
	dot.addEventListener("click", (e) => {
		let clicked_index = dot.getAttribute("data-number")
		document.querySelector('.dot[data-number="'+clicked_index+'"]').classList.add("dot_selected");
		document.querySelector('.dot[data-number="'+current_index+'"]').classList.remove("dot_selected");
		current_index=clicked_index
	
		bannerImg.src="./assets/images/slideshow/"+ slides[current_index].image
		bannerTxt.innerHTML=slides[current_index].tagLine
	});
});
