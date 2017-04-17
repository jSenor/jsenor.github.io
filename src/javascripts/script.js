var nameIntro = document.querySelector(".name-intro");
console.log(nameIntro);
Typed.new(".intro", {
	strings: ["<div class=\"name-intro\">Hi there, I am <span><b>Wisdom Ogwu</b></span></div><div class=\"what-i-do\"><span>I am a </span><b><span>Front End Designer<span></b><span class=\"invisible\">,</span> <span><b>Back End Developer</b></span> and this is <span><b>My Portfolio</b></span></div>"],
	typeSpeed: 5
});

addEvents();

function addEvents(){

	addOpenNavEvent();
	addCloseNavEvent();

}

function addOpenNavEvent(){
	try{
		var toggle = document.querySelector(".open-nav");
		var nav = document.querySelector(".navigation ul");
		var close = document.querySelector(".close-nav");
		toggle.onclick = function(event){
			nav.style.display = "block";
			toggle.style.display = "none";
			close.style.display = "flex";
			console.log(event);
		}
	}

	catch(error){
		console.log(error);
	}
}

function addCloseNavEvent(){
	try{
		var close = document.querySelector(".close-nav");
		var nav = document.querySelector(".navigation ul");
		var toggle = document.querySelector(".open-nav");
		close.onclick = function(event){
			nav.style.display = "none";
			toggle.style.display = "flex";
			close.style.display = "none";
		}
	}

	catch(error){
		console.log(error);
	}
}