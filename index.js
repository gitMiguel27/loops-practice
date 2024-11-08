console.log('For Loops:');
console.log('This is the first task:');
// Count down from 10 to 1.

for (let i = 10; i > 0; i--) {
    console.log(i);
}

console.log('This is the second task:');
// Output odd numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

console.log('This is the third task:');
// Output even number from 1 to 10.

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log('This is the fourth task:');
// Output multiples of 3, starting at 6 and ending at 60.

for (let i = 6; i <= 60; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

console.log('This is the fifth task:');
// Output an increasing number of # symbols, from 1 to 7, as shown below.

let hashString = '';
for (let i = 1; i <= 7; i++) {
    hashString += '#';
    console.log(hashString);
}

console.log('While Loops:');
// Count down to 0 from a given number.
console.log("first task:")

let x = 10
while (x >= 0) {
    console.log(x);
    x--;
}

// Log integers in multiples of 3 as long as they are less than 35.
console.log("second task:")

let y = 3;
while (y < 35) {
    console.log(y);
    y += 3;
}

// Print integers in multiples of 5 as long as they are less than 100.
console.log("third task:")

let z = 5;
while (z < 100) {
    console.log(z);
    z += 5;
}

// Print integers between 0 and 20 with the following conditions:
    // All numbers divisible by 2 should be multiplied by 3 before they are output.
    // All other integers should not be output.
console.log("fourth task:")

let a = 0;
while (a <= 20) {
    if (a % 2 === 0) {
        console.log(a * 3);
    }
    a++;
}

// Print all prime numbers between 0 and 20.
console.log("fifth task:")

let b = 0;
while (b <= 20) {
    if (b % 2 > 0 && b % 3 > 0 || b === 3) {
        console.log(`${b} is a prime number`);
    }
    b++;
}

// BONUS
// Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.
// Write a loop that outputs how many quarters Romeo received.

console.log("Bonus Question:")

let c = 4;
while (c <= 10) {
    for (q = 0; c <= 10; q++) {
        console.log(q);
        c += 0.25;
    }
}

// Another solution:
// let c = 4;
// let q = 0;
// while (c <= 10) {
//     console.log(q);
//     q++;
//     c += 0.25;
// }


//Object Practice:

const users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {},
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {},
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {},
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {},
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {},
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {},
    }
];

users.forEach((user) => {
    console.log(user.username);
});