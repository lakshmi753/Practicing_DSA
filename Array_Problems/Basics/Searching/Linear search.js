// Consider the array arr[] = {10, 50, 30, 70, 80, 20, 90, 40} and key = 30

const array = [10, 50, 30, 70, 80, 20, 90, 40];
const findNum = 90;

const findIndexOfNum = function(arr , num){

    for(let i=0; i<arr.length; i++){

        if(arr[i] === num){
            return i;
        }
    }
    return false;
}

console.log(findIndexOfNum(array, findNum));