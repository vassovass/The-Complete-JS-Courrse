// === learning with age mini exercise
/*
const age = '18';
console.log(age);
console.log(typeof age);
//if (age === 18) console.log(`You have become an %cadult%c at the age of ${age}`, "font-size:25px;color:grey","");
if (age === 18) {
    console.log(`You have become an %cadult%c at the age of ${age}`, "font-size:25px;color:grey", "")
} else {
    if (typeof age === typeof "String") {
        console.log(`this is a %c${typeof age}`, "font-size:25px;color:red");
    } else {
        console.log(`%cThis person is not 18 or the value is NaN`, "font-size:25px;color:yellow");
    };
};
*/

/*
const favourite = prompt("What's your favourite number?");
console.log(favourite, typeof favourite);
console.log(typeof favourite);

if (favourite == 21) {
    console.log("this is a great number loose")
} else {
    console.log("This is not a great number loose")
};
if (favourite === 21) {
    console.log("this is a great number strict")
} else {
    console.log("This is not a great number strict")
};




if (favourite == 21) {
    console.log(`this is a great number (${favourite}) loose`)
} else if (favourite == 5) {
    console.log(`this is a cool number (${favourite}) loose`)
} else {
    console.log(`This is not a great number (${favourite}) loose`)
};
if (favourite === 21) {
    console.log(`this is a great number (${favourite}) strict`)
} else if (favourite === 5) {
    console.log(`this is a cool number (${favourite}) strict`)
} else {
    console.log(`This is not a great number (${favourite}) strict`)
};

const favouriteNumber = Number(favourite);
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if (favouriteNumber == 21) {
    console.log(`this is a great number (${favouriteNumber}) loose`)
} else if (favouriteNumber == 5) {
    console.log(`this is a cool number (${favouriteNumber}) loose`)
} else {
    console.log(`This is not a great number (${favouriteNumber}) loose`)
};
if (favouriteNumber === 21) {
    console.log(`this is a great number (${favouriteNumber}) strict`)
} else if (favouriteNumber === 5) {
    console.log(`this is a cool number (${favouriteNumber}) strict`)
} else {
    console.log(`This is not a great number (${favouriteNumber}) strict`)
};
*/

const age = Number(prompt("What's your age?"));
console.log(age, typeof age);

// if (age === 18) {
//         console.log(`You just became an adult`)
//     } else if (age === 30) {
//         console.log(`You are in your dirty ${age}'s`)
//     } else {
//         console.log("You have a boring age")
//     };

if (age === 18) {
    console.log(`You are 18`)
} else if (age !== 30) {
    console.log(`You are not 30 or 18`)
} else {
    console.log("YOU ARE 30")
};