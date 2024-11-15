function play() {
    const audio = document.querySelector("audio");
    const button = document.querySelector("input");
    audio.play();
    button.style.display = "none";
}