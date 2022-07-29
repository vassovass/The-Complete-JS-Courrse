'use strict';
// **Function Declaration**
// function age(currentYear, birthYear) {
//   const ageCalc = currentYear - birthYear;
//   console.log(`I am ${ageCalc} years old.`);
//   return ageCalc;
// };

// const ageInYears = age(2022, 1984);
// console.log({ ageInYears });

// **Function Expression**
const ageStatement2 = function (currentYear, birthYear) {
  const ageCalc = currentYear - birthYear;
  const ageStatement = `I am ${ageCalc} years old.`;
  return ageStatement;
};

const ageInYears = ageStatement2(2022, 1984);
console.log(ageInYears);
























// function carAge(carBoughtYear, currentYear) {

//   const carAgeCalc = currentYear - carBoughtYear;
//   const carAgeStatement = `I bought my car ${carAgeCalc} years ago.`;
//   return carAgeStatement;
// }
// const carAgeInYears = carAge(2016, 2022);
// console.log({ carAgeInYears })


//Function Exporession
function dogAgeCalc(currentYear, dogBirthYear) {
  const dogYears = currentYear - dogBirthYear;
  const dogAgeStatement = `My dog is ${dogYears} years old`;
  return dogAgeStatement;
}

const dogAgeStatement2 = dogAgeCalc(2022, 2011);
console.log(dogAgeStatement2)



