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