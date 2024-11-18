let numbers = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,]

let count = 0;
for (let i=0; i<numbers.length; i++){
    if(numbers[i]%i==0){
        count = count+1;
    }
if (count == 2){
   console.log(numbers[i]);
}
}
