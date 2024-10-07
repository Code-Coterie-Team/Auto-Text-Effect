const changheSpeed = document.querySelector("#numberSpeed");
const text = "we love programming!";
let textShow = document.getElementById("text");
let timeoutId;
let index = 0;
let speed = 100;
window.onload = function () {
    showCharacter();
};

function showCharacter() {
   
    //textShow.innerHTML ="";
   
    if (index < text.length) {
        textShow.innerHTML += text[index];
        index++;
        timeoutId = setTimeout(showCharacter, speed);
    }
}


changheSpeed.addEventListener("click", () => {

    switch (changheSpeed.value) {
        case "1":
            index=0;
            speed = 100;
            textShow.innerHTML ="";
            //clearTimeout(timeoutId);
            speed = 100;
            showCharacter(100);
            break;
        case "2":
            index=0;
            speed = 200;
            textShow.innerHTML ="";
            // clearTimeout(timeoutId);

            showCharacter();
            break;
        case "3":
            index=0;
            speed = 300;
            textShow.innerHTML ="";
            showCharacter();
            break;
        case "4":
            index=0;
            speed = 400;
            textShow.innerHTML ="";
            showCharacter();
            break;
        case "5":
            index=0;
            speed = 500;
            textShow.innerHTML ="";
            showCharacter();
            break;
        case "6":
            index=0;
            speed = 600;
            textShow.innerHTML ="";
            showCharacter();
            break;
        case "7":
            index=0;
            speed = 700;
            textShow.innerHTML ="";
            showCharacter();
            break;
        case "8":
            index=0;
            speed = 800;
            textShow.innerHTML ="";
            showCharacter();
            break;
        case "9":
            index=0;
            speed = 900;
            textShow.innerHTML ="";
            showCharacter();
            break;
        case "10":
            index=0;
            speed = 10;
            textShow.innerHTML ="";
            showCharacter();
            break;
    }
});