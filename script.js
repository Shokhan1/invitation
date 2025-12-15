const targetDate = new Date("2025-08-15T19:00:00");

setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("timer").innerText = "Той басталды 🎉";
        return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff / 3600000) % 24;
    const minutes = Math.floor(diff / 60000) % 60;

    document.getElementById("timer").innerText =
        `${days} күн ${hours} сағат ${minutes} минутқа қалды`;
}, 1000);

function toggleMusic() {
    const music = document.getElementById("music");
    music.paused ? music.play() : music.pause();
}
