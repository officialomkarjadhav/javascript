let a=[23,45,8,23,78,44];
let ro=Math.round(average(a));
console.log(ro)
function average(a){
let sum=0;
a.forEach(element => {
    sum+=element;
});
return sum/a.length-1;
}
let grade='';
console.log(gradefn(grade))
 function gradefn(grade){
if(average < 70)  grade = 'D'; 
  if(average < 80)  grade = 'C';
  if(average < 90)  grade = 'B';
  if(average <= 100)  grade = 'A';
  return grade;
}