const array = [2, 8, 7, 1, 5];

const findTwoGreatestno = function(arr){
    // in case array has only two elements........
    if(arr.length <= 2){
        return [];
    }

    // finding the largest and the second largest no. ........
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
    
    // filtering out the largest and the second largest no. .........
    const resultingArray = arr.filter(el => el !== max1 && el !== max2);

    // sorting the resulting array...............
    resultingArray.sort((a,b) => a-b);

    return resultingArray;

}

console.log(findTwoGreatestno(array));
// Time complexity of "for loop" is O(n)
// Time complexity of "filter method" is O(n)
// Time complexity of "sort method" is O(n (log n))
// Therefore Time complexity of whole program is O(n (log n))..........