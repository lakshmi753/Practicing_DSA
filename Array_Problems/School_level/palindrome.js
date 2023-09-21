const array = [111, 222, 333, 444];
 const findPalindrome = function(arr){

    for(let i=0; i<arr.length; i++){

        if(arr[i] <= 0  || arr[i]%10 === 0){
            return -1;
        }

        let temp = arr[i];
        let reverse = 0;

        while(temp !== 0){

         let digit = temp%10; //---> way to get the last digit of the no. 
            reverse = (reverse * 10) + digit;
            temp = Math.round(temp / 10);

        }

        if(reverse !== arr[i]){
            return -1;
        }
    }

    return 1
 }

 console.log(findPalindrome(array));
 //O(n^2)................