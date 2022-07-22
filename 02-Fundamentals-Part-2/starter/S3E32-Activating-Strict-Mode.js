'use strict';

let hasDriversLicense = false;
const passTest = true;

switch (passTest) {
  case true:
    hasDriversLicense = true;
    console.log('I can Drive')
    break;
  default:
    hasDriversLicense = false;
    console.log("I can't drive");
}
console.log(`${hasDriversLicense ? "I can Drive" : "I can't drive"}`)

