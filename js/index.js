console.log("I'am ready!");

// Iteration 1: Names and Input

/* 
1.1 Create a variable hacker1 with the driver's name.
1.2 Print "The driver's name is XXXX".
1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY".
*/

let hacker1 = "Julia";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Johnny";
console.log(`The navigator's name is ${hacker2}`);




//
// Iteration 2: Conditionals

/* 
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.

*/

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
};

// Iteration 3: Loops

/* 
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?

*/

hacker1.toUpperCase();
console.log(hacker1.toUpperCase());

for (let i=0; i < hacker1.toUpperCase().length; i++) {
  console.log(hacker1[i].toUpperCase())
};

/*function reverseString(hacker2){
let reverseName = ``;

for (let i=hacker2.length; i>0; i--){
  reverseName += hacker2[i];
}
return reverseString;
};

console.log(`${reverseName}`);

/*for (let i=6; i < hacker2.length; i--) {
  console.log(${hacker2.length});
};*/ 

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
}; 


if (hacker1.localCompare(hacker2) === -1) {
  console.log("The driver's name goes first.")
}
else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} ;