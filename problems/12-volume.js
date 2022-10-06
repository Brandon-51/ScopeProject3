/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/

// Your code here
function recVolume(height) {
  let dimensions = [height];
  const getDimension = (num) => {
    if (dimensions < 3) {
      dimensions.push(num);
    }
    if (dimensions.length === 3) {
      let product = 1;
      for (let dimension of dimensions) {
        product *= dimension;
      }
      return product;
    } else {
      return getDimension;
    }
  };
  return getDimension;
  // let counter = 0;
  // let volume = 0;
  // if (counter <= 2) {
  //   console.log("1st");
  //   if (counter <= 2) {
  //     console.log("2nd");
  //     const innerFuntion = (num) => {
  //       if (counter <= 0) {
  //         console.log("3rd");
  //         width = num;
  //         counter++;
  //         return innerFuntion;
  //       } else if (counter <= 1) {
  //         let length = num;
  //         volume = height * width * length;
  //         console.log("else if");
  //         counter++;
  //         return innerFuntion;
  //       }
  //       return volume;
  //     };
  //     return innerFuntion
  //   }
  // }
  // return volume;
}
recVolume(10);
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
