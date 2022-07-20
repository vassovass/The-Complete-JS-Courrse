
/*
let age = 19;
let legalAge = age >= 18;

if (legalAge) {
    console.log('This is legal age')
} else {
    const yearsLeft = 18 - age
    console.log(`There are ${yearsLeft} till legal age`);
}

age = 2
console.log(age);
legalAge = age >= 18;
if (legalAge) {
    console.log('This is legal age')//
} else {
    const yearsLeft = 18 - age
    console.log(`There are ${yearsLeft} years till legal age`);
};


const birthYear = 1991;
if (birthYear <= 2000) {
    console.log("Birthed in the 20th century")
} else {
    console.log("Not birthed in the 20th Century")
};
*/
const birthYear = 2005;
// let century;
// let postLetters;
// if (birthYear < 2000) {
//     century = 20;
//     postLetters = "th";
// } else {
//     century = 21;
//     postLetters = "st";
// }
// console.log(`${century}${postLetters} century`); // th should have if else as well for 21st {@Link }
const birthYear2 = birthYear < 2000
switch (birthYear2) {
    case (birthYear2 < 2000):
        century = 20;
        postLetters = "th";
        console.log(`${century}${postLetters} century`);
        break;
    case birthYear2 > 2000:
        century = 21;
        postLetters = 'st';
        console.log(`${century}${postLetters} century`);
        break;

}