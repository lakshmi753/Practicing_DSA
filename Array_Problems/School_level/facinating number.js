const num = 192;

const isFacinatingNumber = function(n){

    if(n < 100 || n > 999){
        return false; // number should be three digit or more...
  
    }

    const concatenatedString = String(n) + String(2*n) + String(3*n); // 192384576
    console.log(concatenatedString);
    // Concatenating the three numbers: This step is to concatenate N, 2*N, and 3*N into a single string.
    // The concatenation operation takes linear time O(k), where k is the total number of digits in the concatenated string.
    // In this case, since N, 2*N, and 3*N all have the same number of digits (maximum 3 digits), the total number of digits will be at most 9 (for example, when N is 192).
    // Therefore, this step takes O(1) time .
    
    const allDigits = '123456789';
    for(let digit of allDigits){
        if(concatenatedString.indexOf(digit) === -1){
            return false; // if any digit is missing, return false...
        }
    }

    return true; // all digits are present exactly at once...
}
    // Checking if all digits from 1 to 9 are present: This step involves iterating over all the digits from 1 to 9 (a constant number of digits) and checking if each digit exists in the concatenated string.
    // Since the string has at most 9 digits (as discussed earlier), the lookup for each digit can be considered O(1) on average.

const result = isFacinatingNumber(num);
console.log(result);

// Time complexity ---> O(1)...