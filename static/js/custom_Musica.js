var boton = document.getElementById("boton");
let v = document.getElementsByTagName("audio")[0];
var reproductor = document.getElementById("reproductor");
var sound = false;

boton.addEventListener("click", function(){
	if (!sound) {
		console.log("Prendido");
		v.play();
		reproductor.classList.replace("fa-volume-up","fa-volume-off");
		sound = true;
    v.volume ="0.4"; 
		} else {
			console.log("Apagado");
			v.pause();
			reproductor.classList.replace("fa-volume-off","fa-volume-up");
			sound = false;
			} 
    });