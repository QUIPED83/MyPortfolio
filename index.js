const sonido = document.createElement("audio");
function replace(btn){
    switch(btn){
        case 'projects':
        document.getElementById("proyectos").style.visibility="visible";
        document.getElementById("about").style.visibility="hidden";
        document.getElementById("cv").style.visibility="hidden";
        break;
        case 'about':
        document.getElementById("proyectos").style.visibility="hidden";
        document.getElementById("about").style.visibility="visible";
        document.getElementById("cv").style.visibility="hidden";
        break;
        case 'cv':
        document.getElementById("proyectos").style.visibility="hidden";
        document.getElementById("about").style.visibility="hidden";
        document.getElementById("cv").style.visibility="visible";
        break;
    }
}
let soundFlag=false; //false == hay audio //true == audio con mute
function sound(){
    sonido.preload="auto";
    sonido.src = "./sounds/AboutMe.mp3";
    let img = document.getElementById("soundOnOff");
    if(soundFlag){
        img.src="./imgs/icon-voiceOff.svg";
        soundFlag=false;
        sonido.pause();
    }else{
        img.src="./imgs/icon-voiceOn.svg"
        soundFlag=true;
        sonido.play();
    }
}