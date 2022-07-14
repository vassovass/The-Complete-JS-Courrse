/*
const B = B > 50;
const C = A < 80;

console.log(`B = A > 50; C <80 + ${B AND C} + AND`);
*/

const passDriversLicense = true; // A true
const hasGoodVision = false; // B false

/*
console.log(`1 ${passDriversLicense && hasGoodVision} AND is is`);      // false
console.log(`2 ${passDriversLicense || hasGoodVision} OR is is`);       // true
console.log(`3 ${!passDriversLicense && hasGoodVision} AND not is`);    // false
console.log(`4 ${!passDriversLicense || hasGoodVision} OR Not is`);     // false
console.log(`5 ${passDriversLicense && !hasGoodVision} AND is Not`);    // true
console.log(`6 ${passDriversLicense || !hasGoodVision} OR not not`);    // true
console.log(`7 ${!passDriversLicense && !hasGoodVision} AND NOT NOT`);  // false
console.log(`8 ${!passDriversLicense || !hasGoodVision} OR NOT NOT`);   // true
console.log(`9 ${passDriversLicense} IS`);                              // true
console.log(`10 ${hasGoodVision} IS`);                                  // false
console.log(`11 ${!passDriversLicense} NOT`);                           // false
console.log(`12 ${!hasGoodVision} NOT`);                                // true
*/
let shouldDrive = ('1 ' + passDriversLicense && '1 ' + hasGoodVision);
console.log({ shouldDrive })
if (shouldDrive) {
    console.log(`${shouldDrive} she should drive`)
} else {
    console.log(`${shouldDrive} she shouldn't drive`)
};

shouldDrive = ('2 ' + !passDriversLicense && '2 ' + hasGoodVision);
console.log({ shouldDrive })
if (shouldDrive) {
    console.log(`${shouldDrive} she should drive`)
} else {
    console.log(`${shouldDrive} she shouldn't drive`)
};

shouldDrive = ('3 ' + passDriversLicense && '3 ' + !hasGoodVision);
console.log({ shouldDrive })
if (shouldDrive) {
    console.log(`${shouldDrive} she should drive`)
} else {
    console.log(`${shouldDrive} she shouldn't drive`)
};

shouldDrive = ('4 ' + passDriversLicense || '4 ' + hasGoodVision);
console.log({ shouldDrive })
if (shouldDrive) {
    console.log(`${shouldDrive} she should drive`)
} else {
    console.log(`${shouldDrive} she shouldn't drive`)
};

shouldDrive = ('5 ' + passDriversLicense || !hasGoodVision);
console.log({ shouldDrive })
if (shouldDrive) {
    console.log(`${shouldDrive} she should drive`)
} else {
    console.log(`${shouldDrive} she shouldn't drive`)
};


shouldDrive = ('6 ' + !passDriversLicense || hasGoodVision);
console.log({ shouldDrive })
if (shouldDrive) {
    console.log(`${shouldDrive} she should drive`)
} else {
    console.log(`${shouldDrive} she shouldn't drive`)
};




