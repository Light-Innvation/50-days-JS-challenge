 // rotate an array to the left 1 position
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


//ANother methos we could use

function rotateLeft(arr){
    if (arr.length <= 1) {
        return arr;
    }
    const rotatedArray = arr.slice(1);
    rotatedArray.push(arr[0]);
    return rotatedArray;
    
}
const array2 = [1,2,3,4,5,5,6];
console.log(" Array", array2);
console.log( "Array rotated left by 1 position:", rotateLeft(array2));