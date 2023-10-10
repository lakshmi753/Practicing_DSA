const array = [1, 7, 7, 4, 3, 7, 4, 8, 7];
const kTimes = 2;

const firtsElementWithKOccurence = function(arr, k){

    const freqMap = {}; // object to store frequency of elements.

    for(let i=0; i<arr.length; i++){

        let n = arr[i];

        // console.log(freqMap[n]); // here it is "undefined", when occured fistly (because it not the object's element right now).

        // if(freqMap[n]){    // since "undefined" is a "falsy" value;
        //     freqMap[n] +=1;
           
        // }
        // else{
        //     freqMap[n] = 0+1;
        // }
        
        // if(freqMap[n]===k){
        //     return n;
        // }

         freqMap[n] = (freqMap[n] || 0) + 1; // this line is known as "javaScript idiom" in programming language. It is working in the same manner as the above piece of code.
        console.log(freqMap[n]);             // In programming, an "idiom" refers to a particular expression, pattern, or code construct that is commonly used and recognized for
                                             // its concise, elegant, or efficient way of achieving a specific task.
         if(freqMap[n] === k){
            return n;
        }
    }

    return -1;
}

console.log(firtsElementWithKOccurence(array, kTimes));

// Time complexity ---> O(n)........

// Explanation of the code...................

// 1. We define a function called firstElementWithKOccurrences that takes two arguments:
// arr (the input array of integers) and k (the number of occurrences we are looking for).

// 2. We initialize an empty object called freqMap to store the frequency of each element in the input array.
// JavaScript objects work similarly to dictionaries in Python.

// 3. We use a for loop to iterate through each element in the array arr.

// 4. For each element num in the array, we update its frequency in the freqMap object.
// We use the syntax freqMap[num] = (freqMap[num] || 0) + 1 to achieve this.

// @ After processing 1: freq_map = {1: 1}
// @ After processing 7: freq_map = {1: 1, 7: 1}
// @ After processing 4: freq_map = {1: 1, 7: 1, 4: 1}
// @ After processing 3: freq_map = {1: 1, 7: 1, 4: 1, 3: 1}
// @ After processing 4: freq_map = {1: 1, 7: 1, 4: 2, 3: 1}
// @ After processing 8: freq_map = {1: 1, 7: 1, 4: 2, 3: 1, 8: 1}
// @ After processing 7: freq_map = {1: 1, 7: 2, 4: 2, 3: 1, 8: 1}

// If the element is not yet present in freqMap, freqMap[num] will be undefined,
// so (freqMap[num] || 0) will return 0, and we add 1 to it to start counting the element from the first occurrence. 
//If the element is already in freqMap, (freqMap[num] || 0) will return its current value (frequency),
// and we add 1 to indicate that we have encountered the element one more time.


// 5. After updating the frequency of the current element, we check if its frequency (freqMap[num]) is equal to k. 
//If it is, we have found an element that occurs at least k times, so we return that element num.

//6. If we don't find any element with a frequency of at least k in the loop, we return null to indicate that no such element exists in the array.


