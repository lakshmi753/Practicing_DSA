const array = [10, 20, 30, 40, 50];

let totalSum = 0;

const printAverageOfArray = function(arr, sum){
    let avg;
    let num;

    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
        num = i + 1;
        avg = sum/num;
        console.log(avg);
    }

}

printAverageOfArray(array, totalSum);

// Time complexity ---> O(n)....