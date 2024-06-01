let images = [
    "Dice 1.png",
    "Dice 2.png",
    "Dice 3.png",
    "Dice 4.png",
    "Dice 5.png",
    "Dice 6.png"
];
let dice = document.querySelectorAll("img");

function roll() {
    dice.forEach(function(die) {
        die.classList.add("shake");
    });

    setTimeout(function() {
        dice.forEach(function(die) {
            die.classList.remove("shake");
        });

        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);

        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "Your roll is " + ((dieOneValue + 1) + (dieTwoValue + 1));
    }, 1000);
}
