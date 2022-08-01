const cutPieces = function (fruit) {
  return fruit * 4;
}


const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `${applePieces} pieces of apple and ${orangePieces} pieces of orange were used to make the juice`
  return juice
}

console.log(fruitProcessor(3, 5))

