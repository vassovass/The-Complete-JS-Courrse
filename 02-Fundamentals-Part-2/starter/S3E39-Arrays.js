const friends = ["luke", "mark", "john"]

const friends2 = new Array("michael", "danny", "barry", Boolean("marky"), "johnny", "amby")

console.log(friends, friends2)

console.log(friends[1], friends2[3])

console.log(friends2[friends2.length - 1])

friends2[friends2.length - 1] = 'kak';

console.log(friends, friends2);

const friends3 = friends.concat(friends2);

console.log(friends3)

console.log("------------------------------");

// * Placing function calls within and Array

const calcAge = function (birthYear) {
  return 2025 - birthYear;
}

const years = [1995, 1969, 2021, 2006, 2003, 1934, 1881];

const age1 = calcAge(years[0])
const age2 = calcAge(years[2])
const age3 = calcAge(years[years.length - 4])
const age4 = calcAge(years[years.length - 3])
const age5 = calcAge(years[years.length - 2])
const age6 = calcAge(years[years.length - 1])

console.log({ age1 }, { age2 }, { age3 }, { age4 }, { age5 }, { age6 })

const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 4]), calcAge(years[years.length - 3]), calcAge(years[years.length - 2]), calcAge(years[years.length - 1])];

console.log(ages);

const ages2 = [age1 + 3, age2 + 3, age3 + 3, age4 + 3, age5 + 3, age6 + 3]

console.log(ages2);