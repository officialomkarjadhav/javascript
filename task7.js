speedlimit=70;
point=5;
 
function speedtest(speed){
if(speed<speedlimit){
    return 'good speed';
}
else{
    let penalty=Math.floor((speed-speedlimit)/point);
    if(penalty<10){
        return 'speed limit crossed by penalty point '+penalty;
    }
    else{
        return 'liecense suspended'
    }
}
}

let checkPoin1 = speedtest(40);
console.log(checkPoin1);

let checkPoin2 = speedtest(70);
console.log(checkPoin2);

let checkPoin3 = speedtest(75);
console.log(checkPoin3);

let checkPoin4 = speedtest(99);
console.log(checkPoin4);

let checkPoin5 = speedtest(120);
console.log(checkPoin5);