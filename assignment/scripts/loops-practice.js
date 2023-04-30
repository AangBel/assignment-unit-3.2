console.log("****** Loops Practice *******");

// 1. 'for' loop
console.log("---- 1. For loops ----");
// Example: a for loop to console.log numbers from 0 to 3
console.log("count from 0 to 3");
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i = 0; i < 4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
//----the number from <4 to 6- the stopping condition
console.log("count from 0 to 5");
for (let i = 0; i < 6; i++) {
  console.log(i);
}
// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
//--- the initialization
console.log("count from 3 to 5");
for (let i = 3; i < 6; i++) {
  console.log(i);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
//---- the iteration
console.log("count even numbers from 2 to 10 (2, 4, 6, 8, 10):");
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log("STRETCH: countdown from 5 to 0");
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// 2. For of loops
//------- DID THE ASSIGNMENT WANT EACH TO SAY 'SOME STARS: POLARIS', OR JUST THE ONCE?
console.log("---- 2. For Of loop ----");
let stars = ["Polaris", "Gacrux", "Formalhaut", "Rigel", "Deneb"];

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log("Some stars:");
for (let i = 0; i < stars.length; i++) {
  console.log(stars[i]);
}

///----------------------------------
// 3. While loops
console.log("---- 3. While loop ----");
// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let x= 0;
while (x < stars.length){
  console.log(stars[x]);
  x++;
};


// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log("count from 0 to 5");
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}


// Write your code below

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log("count backwards from 10 to 5");
let n = 10;

while (n >= 5) {
  console.log(n);
  n--;
}
