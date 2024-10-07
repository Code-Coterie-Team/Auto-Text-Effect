const numberSpeed = document.querySelector("#numberSpeed");
const text = "we love programming!";
let textShow = document.getElementById("text");
let index = 0;
let speed = 100;

function showCharacter() {

    if (index < text.length) {
        textShow.innerHTML += text[index];
        index++;
    setTimeout(showCharacter, speed);
    }
}
showCharacter();
numberSpeed.addEventListener("input", changheSpeed);

function changheSpeed(e) {
    index = 0;
    textShow.innerHTML = "";
    speed = 300 / e.target.value;
    showCharacter();

}
