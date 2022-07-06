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
    console.log('This is legal age')
} else {
    const yearsLeft = 18 - age
    console.log(`There are ${yearsLeft} years till legal age`);
};
/*
const birthYear = 1991;
if (birthYear <= 2000) {
    console.log("Birthed in the 20th century")
} else {
    console.log("Not birthed in the 20th Century")
};
*/
const birthYear = 2005;
let century;
if (birthYear < 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(`${century}th century`); // th should have if else as well for 21st