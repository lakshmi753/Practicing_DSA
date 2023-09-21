const array = [4, 1, 5, 3, 4, 9, 6, 2, 8];
const arr1 = [];

const valueEqualToIndex = (arr) =>{

    for(let i=0; i<arr.length; i++){
        if(i === arr[i]){
            arr1.push(i);
        }
    }
    return arr1;
}

console.log(array, valueEqualToIndex(array));
// O(n)...........