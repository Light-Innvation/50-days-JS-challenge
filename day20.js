 // rotate an array to the left position
 function rotateRight(arr){
    if (arr.length <= 1) {
        return arr;
    }
    const LastElement = arr.pop();
    arr.unshift(LastElement);
    return arr;
}
const array = [1,2,3,4,5,5,6];
console.log("original Array", array);
console.log( "Array rotated right by 1 position:", rotateRight(array));

//anothermethod which can be use
function rotateRight(arr){
    if (arr.length <= 1) {
        return arr;
    }
    const LastElement2 = arr.slice(-1);
    const rotatedArray = LastElement2.concat(arr.slice(0, -1));
    return rotatedArray;
    
}
const array2 = [1,2,3,4,5,5,6];
console.log(" Array", array2);
console.log( "Array rotated right by 1 position:", rotateRight(array2));