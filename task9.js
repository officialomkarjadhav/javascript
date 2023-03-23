let a=['',12,true,false,undefined]

console.log(counttruly(a))

function counttruly(a){
let count=0;

for(let value of a){
    if(value){
      count++;
    }
}

return count;
}