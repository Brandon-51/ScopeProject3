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
  // console.log('start')
  let dimensions = [height];
  const getDimension = (num) => {
    // console.log(num)
    num = 10; 
    console.log(num)
    if (dimensions.length < 3) {
      // console.log(dimensions)
      newDim = dimensions.push(num);
      // console.log('this is a newDim ' + newDim)
      console.log(dimensions)
    }
    if (dimensions.length === 3) {
      // console.log('second')
      let product = 1;
      // console.log(product)
      for (let dimension of dimensions) {
        product *= dimension;
        // console.log(product);
        // console.log('loop')
      }
      return product;
    } 
    else {
      console.log('else')
      return getDimension();
    }
  };
  // console.log('end')
  return getDimension();
 
}
recVolume(19);
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
