// Create an array to store the user's favorite colors
let favoriteColors = [];

// Loop to prompt the user for color input three times
for (let i = 0; i < 3; i++) {
    let color = prompt("Enter a color you like:");
    favoriteColors.push(color); // Add the new color to the array
    console.log(`Updated color list: ${favoriteColors.join(", ")}`); // Print the updated array to the console
}
