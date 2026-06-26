const text = "🎂 🍰🧁🎂 🍰🧁🎂 🍰🧁🎂 🍰🧁🎂 🍰🧁🎂 🍰🧁🎂 🍰🧁";

let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}

typing();

// Music
const music = document.getElementById("music");

document.getElementById("playMusic").addEventListener("click", () => {
    music.play();
});

// Flying Cakes
function createCake(){

    const cake = document.createElement("div");

    cake.className = "flying-cake";

    cake.innerHTML = "🎂";

    cake.style.left = Math.random()*100 + "vw";

    cake.style.animationDuration = (5 + Math.random()*5) + "s";

    document.body.appendChild(cake);

    setTimeout(()=>{
        cake.remove();
    },10000);

}

setInterval(createCake,700);