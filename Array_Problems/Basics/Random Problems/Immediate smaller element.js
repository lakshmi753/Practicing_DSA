const array = [5, 6, 2, 3, 1, 7];

const immediateSmaller = function(arr){
     let num = arr[0];
     let update = 0;

     for(let i=1; i<=arr.length; i++){

        if(arr[i] < num){
            update = arr[i];
            console.log(update);
        }
        else{
            update = -1;
            console.log(update);
        }

        num = arr[i];
     }
}

immediateSmaller(array);

// Time complexity ---> O(n)...