<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Favorite Number Guessing Game</title>
</head>
<body>
    <script>
        // Declare and set the favorite number
        let favoriteNumber = 13; // Replace with the actual favorite number
        let guess = 0;

        // Prompt the user to guess the number until they get it right
        while (guess !== favoriteNumber) {
            guess = parseInt(prompt("Guess the favorite number:"));

            if (guess > favoriteNumber) {
                console.log("Too high! Try again.");
            } else if (guess < favoriteNumber) {
                console.log("Too low! Try again.");
            } else if (guess === favoriteNumber) {
                console.log("Correct! You've guessed the favorite number.");
            } else {
                console.log("Please enter a valid number.");
            }
        }
    </script>
</body>
</html>
