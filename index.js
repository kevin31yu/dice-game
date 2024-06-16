function getNumber() {
    return Math.floor(Math.random() * 6 + 1);
}

window.onload = function() {
    const num1 = getNumber();
    const num2 = getNumber();
    document.querySelector(".dice .img1").src = "./images/dice" + num1 + ".png";
    document.querySelector(".dice .img2").src = "./images/dice" + num2 + ".png";

    const title = document.querySelector(".container h1");
    if (num1 == num2) {
        title.innerHTML = "Draw!";
    }
    else if (num1 < num2) {
        title.innerHTML = "Player 2 wins!";
    }
    else {
        title.innerHTML = "Player 1 wins!";
    }
}