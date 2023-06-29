function myFunction() {
  let x = document.getElementById('int').value;
  let y = document.getElementById('int1').value;
  let text = "";
  const root = Math.sqrt(x);
  let isPrime = true;
  let processx = false;
  let divisorx = [];
  let text1 = "";
  const root1 = Math.sqrt(y);
  let isPrime1 = true;
  let processy = false;
  let divisory = [];

  if(isNaN(x) == false ) {
    for(let i = 2; i <= root; i++) {
      if(x % i === 0 && x > 2) {
        for(let i = 2; i<x; i++ ) {
          if(x % i === 0) {
            divisorx.push(i)
          }
        }
        text += divisorx + "are divisor of x";
        processx = true;
        isPrime = false;
        break;

      }
    }
    if(isPrime == true) {
      text += x + "is divisor[prime]";
      divisorx.push(x);
      processx = true;
    }
  } else {
    window.alert("enter number, "+x+" is not number ");

  }
  document.getElementById('demo').innerHTML = text;

  if(isNaN(y) == false ) {
    for(let j = 2; j <= root1; j++) {
      if(y % j === 0 && y > 2) {
        for(let j = 2; j<y; j++ ) {
          if(y % j === 0) {
            divisory.push(j)
          }
        }
        text1 += divisory + "are divisor of y";
        processy = true;
        isPrime1 = false;
        break;

      }
    }
    if(isPrime1 == true) {
      text1 += y + "is divisor[prime]";
      divisory.push(y);
      processy = true;
    }
  } else {
    window.alert("enter number, "+y+" is not number ");

  }
  document.getElementById('demo1').innerHTML = text1;

}