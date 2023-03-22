let i=20;
let j=30;
let temp=0;

temp=i+j;
i=temp-i;
j=temp-j;

console.log('swap', i);
console.log('swap', j);