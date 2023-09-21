const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr1 = [];

const printAlternateValues = (arr) =>{

    for(let i=0; i<arr.length; i++){
        if(i%2 !== 0){
            arr1.push(arr[i]);
        }
    }

    return arr1;
}

console.log(array, printAlternateValues(array));