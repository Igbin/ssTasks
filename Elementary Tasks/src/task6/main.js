function squaresRow(n, m) {
  if(checkArguments(n, m)) {
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

function checkArguments(n, m) {
  let error = {
    status: 'failed',
    reason: ''
  }

  if(!n || !m) {
    error.reason = 'arguments must be length row and min square and bigger than 0';
  } else if(typeof(n) !== 'number' || typeof(m) !== 'number' || +n < 0 || +m < 0) {
    error.reason = 'length row and min square number must be positive numbers';
  }

  return error.reason ? error : false;  
}




console.log(squaresRow(10, 100))


  
  