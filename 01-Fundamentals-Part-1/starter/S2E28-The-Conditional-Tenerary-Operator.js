age = 17;

let legalLimit = age >= 18 ? console.log('He is of legal limit') : console.log('He is not of legal limit');

// if (age >= 18) {
//   console.log('He is of legal limit');
// } else {
//   console.log('He is not of legal limit');
// }
legalLimit = age >= 18 ? 'He is of legal limit' : 'He is not of legal limit';
console.log(`Is he of the legal limit? ${legalLimit}`)