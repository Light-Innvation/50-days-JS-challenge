 // rotate an array to the left position
 function rotateLeft(arr){
     if (arr.length <= 1) {
         return arr;
     }
     const firstElement = arr.shift();
     arr.push(firstElement);
     return arr;
 }
 const array = [1,2,3,4,5,5,6];
 console.log("original Array", array);
 console.log( "Array rotated left by 1 position:", rotateLeft(array));


