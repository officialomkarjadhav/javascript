console.log('10-netsted-loop-star-pattern');
i=10;
function showPattern(j) {
  for (let curRow = 1; curRow <= j; curRow++) {

    let star = '';
    for (let i = 0; i < curRow; i++) {
      star += '*'
    }
    console.log(star);
  }
}

showPattern(i);