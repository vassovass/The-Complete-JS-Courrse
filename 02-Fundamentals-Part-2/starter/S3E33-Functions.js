'use strict';

// function vegetableProcessor(carrot, butternut) {
//   // console.log({ carrot }, { butternut });
//   const soup = `Vegetable soup with ${carrot} carrots & ${butternut} butternuts.`;
//   return soup;
// }



// // console.log({ carrot }, { butternut }); //carrot not defined due to 'carrot var being declared in function

// const vegetableSoup = vegetableProcessor(5, 3);
// console.log({ vegetableSoup })
// console.log(vegetableProcessor(5, 3))
// // console.log({ vegetableProcessor(5, 3) })
// vegetableProcessor(8, 9);


const vegetableProcessor = function (carrot, butternut) {
  // console.log({ carrot }, { butternut });
  const soup = `Vegetable soup with ${carrot} carrots & ${butternut} butternuts.`;
  return soup;
}

