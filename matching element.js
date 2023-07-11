// Finding the Matching Element..............

const arr1 = [1,4,5];
const arr2 = [2,4,5];
let result;

for(let i=0 ; i<arr1.length ; i++){
   for(let j=0 ; j<arr2.length ; j++){
    if(arr1[i]===arr2[j]){
       result = arr1[i];
      break;
    }
   }
}

console.log(result);
//o(n^2)