const music = document.getElementById("music");
const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");
const musicBtn = document.getElementById("musicBtn");

/* OPEN INVITATION */
function openInvitation(){
  cover.style.display = "none";
  invitation.classList.remove("hidden");
  music.play();            // MUSIK PASTI PLAY
  musicBtn.style.display = "flex";
}

/* MUSIC CONTROL */
function toggleMusic(){
  music.paused ? music.play() : music.pause();
}

/* FLOWER */
for(let i=0;i<25;i++){
  const flower = document.createElement("div");
  flower.className="flower";
  flower.innerHTML="🌸";
  flower.style.left=Math.random()*100+"%";
  flower.style.animationDuration=5+Math.random()*5+"s";
  document.body.appendChild(flower);
}

/* NAMA TAMU DARI LINK */
const params = new URLSearchParams(window.location.search);
const nama = params.get("to");
if(nama){
  document.getElementById("tamu").innerText = decodeURIComponent(nama);
}
