const noBtn = document.getElementById("no");
const card = document.querySelector(".card");
const hoverSound = document.getElementById("hoverSound");

let countHover = 0;
let bubbleCreated = false;
const tentativas = 50;

noBtn.addEventListener("mouseenter", () => {
    if (countHover < tentativas) {
        hoverSound.currentTime = 0;
        hoverSound.play();
    }

    countHover++;

    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = cardRect.width - btnRect.width - 10;
    const maxY = cardRect.height - btnRect.height - 10;

    if (countHover < tentativas) {
        noBtn.style.left = Math.random() * maxX + "px";
        noBtn.style.top = Math.random() * maxY + "px";
    }

    const frases = [
        "Desisto.",
        "Você venceu.",
        "50 tentativas. Sério?",
        "Claramente isso virou um esporte.",
        "Só clica logo."
    ];

    thoughtBubble.textContent =
    frases[Math.floor(Math.random() * frases.length)];

    if (countHover >= tentativas && !bubbleCreated) {
        bubbleCreated = true;

        thoughtBubble.style.display = "block";

        thoughtBubble.style.left =
            (noBtn.offsetLeft + 60) + "px";

        thoughtBubble.style.top =
            (noBtn.offsetTop - 80) + "px";
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = Math.random() > 0.5 ? "🩷" : "💜";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 22 + 14 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    heart.style.opacity = Math.random() * 0.5 + 0.4;

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 380);