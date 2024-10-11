function askNumber() {

let correctNumber = 4;
let guess;
while (guess !== correctNumber) {
    guess= prompt("Guess a number between 1 and 10:");
    if (guess < correctNumber) {
      alert("Too low!"); 
    } else if (guess > correctNumber) {
      alert("Too high!");
    } else {
      alert("Correct!");
    }
}
}