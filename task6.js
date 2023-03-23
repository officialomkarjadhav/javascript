function fizzbuzz(i){
if(typeof i !=='number'){
    return ("input is not an number");
}
if(i%3==0 && i%5==0){
return("fizzbuzz");
}
if(i%3==0){
    return("fizz");
}
if(i%5==0){
    return("buzz");
}
else{
    return("odd number enter "+i)
}
}
console.log(fizzbuzz(34));


let checkFizzBuzz1 = fizzbuzz('one');
console.log(checkFizzBuzz1);

let checkFizzBuzz2 = fizzbuzz(true);
console.log(checkFizzBuzz2);

let checkFizzBuzz3 = fizzbuzz(9);
console.log(checkFizzBuzz3);

let checkFizzBuzz4 = fizzbuzz(10);
console.log(checkFizzBuzz4);

let checkFizzBuzz5 = fizzbuzz(30);
console.log(checkFizzBuzz5);

let checkFizzBuzz6 = fizzbuzz(11);
console.log(checkFizzBuzz6);