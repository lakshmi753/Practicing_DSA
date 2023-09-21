const array = [12, 35, 48, 10, 30, 1, 34, 40, 44, 50];



const printSecondLargestno = function(arr){
    
    let max1 = arr[0];
    let max2 = -1;

    for(let i=1; i<arr.length; i++){
        if(arr[i] > max1){
            max2 = max1;
            max1 = arr[i];
        }
        else if(arr[i]> max2 && arr[i]< max1){
            max2 = arr[i];
        }
    }

    return max2;
}


console.log(printSecondLargestno(array));