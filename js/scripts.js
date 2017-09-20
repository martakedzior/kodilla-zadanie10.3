// scripts.js
// Excercise 10.3

$(function(){
	console.log('DOM loaded - you can have fun');

    var carouselList = $("#carousel ul");

	setInterval(changeSlide, 3000); 

	function changeSlide() {
        carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);
    	}  

	function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    	}
});

