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

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards

let count = 0;

function cc(card) {
  // Only change code below this line

  const action = ['Hold', 'Bet']

  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        count++;
        break;
    case 7:     /* I only added this for reading purposes to explicitly show 7-9 hold the count */
    case 8:
    case 9:
        count = count;
        break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
        count--;
        break;
  }

  if (count <= 0) {
    return count + " " + action[0];
  } else {
    return count + " " + action[1];
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// Objects

const myDog = {
    name: 'Biscuit',
    legs: 4,
    tails: 1,
    friends: ['Ethan', 'Mason', 'Vanessa', 'Oma', 'Opa']
}

// Using variables to lookup object properties
// Setup

// This allows you to input a player number, then the player var will become 
// the result of whatever data is stored in 16, returning "Montana"
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[playerNumber];   // Change this line



// Convert the switch statement into an object called lookup. 
// Use it to look up val and assign the associated string to the result variable.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/using-objects-for-lookups
// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    switch(val) {
      case "alpha":
        result = "Adams";
        break;
      case "bravo":
        result = "Boston";
        break;
      case "charlie":
        result = "Chicago";
        break;
      case "delta":
        result = "Denver";
        break;
      case "echo":
        result = "Easy";
        break;
      case "foxtrot":
        result = "Frank";
    }


  
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");