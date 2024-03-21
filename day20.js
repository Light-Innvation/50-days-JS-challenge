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