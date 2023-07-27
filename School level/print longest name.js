const array = ['geek', 'geeks', 'geeksfor', 'geeksforgeek', 'geeksforgeeks'];
let longest = 0;

const printLongestname = function(arr, num){
    let longestname ;
    for(let i=0; i<arr.length; i++){

    if(arr[i].length > num){
        num = arr[i].length;
        longestname = arr[i];
    }
 }

 return longestname;
}

console.log(printLongestname(array,longest));
// O(n).................