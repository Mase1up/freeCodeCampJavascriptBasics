// Golf Code
// Here I didn't notice the array already built, and typed out strings for each if...
// I really like the concept of creating an array, because later you can modify, add/remove 
// values more easily.

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line

  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
  }

  // Only change code above this line
}

golfScore(5, 4);

// Counting Cards
// So the main issue I was having was that I declared a var locally instead of globally
// Also, again I didn't notice the var was already declared globally for me anyway
// But the local declaration was causing errors.  If I remember correctly, it was basically
// resetting my count var to 0 every time a new card was passed instead of keeping a running tally.
// So I got everything correct that happend to end with a state of -1 to +1 but all else was wrong.
// Then the other thing was I didn't pay attention to the order they wanted, I was creating the final
// string requested backwards, saying Hold or Bet first, then the count.  Pay attention to that stuff.

let count = 0;

function cc(card) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');