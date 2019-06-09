function checkArguments(n, m) {

  let error = {
    status: 'failed',
    reason: ''
  }

  if(!n || !m) {
    error.reason = 'arguments must be length row and min square number';
  } else if(!isFinite(+n) || !isFinite(+m) || +n < 1 || +m < 1 ) {
    error.reason = 'length row and min square number must be positive numbers';
  }

  return error.reason ? error : true;  
}


function squaresRow(n, m) {

  if(checkArguments(n, m) !== true) {
    return checkArguments(n, m) 
  }

  let length = n,
      minSqrt = Math.floor(Math.sqrt(m))
      result = '';

  for(let i = 0; i < length; i++) {
      result =`${result + minSqrt}, `;
      minSqrt++;
  }   
  
  return result.slice(0, -2);
}

console.log(squaresRow(10, '100.1'))


  
  