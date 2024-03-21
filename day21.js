//reverse an array
function reverseArray(arr) {
    const arr2 = [];
    for (let i = arr.length -1; i >= 0; i--) {
        arr2.push(arr[i]);
        
        
    }
    return arr2;
}
const array = [1,2,3,4,5];
console.log("the reverse array is", reverseArray(array));
