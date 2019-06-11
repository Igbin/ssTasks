function checkArguments(height, width, symbol) {

  let error = {
    status: 'failed',
    reason: ''
  }

  if(typeof(height) === 'undefined' || typeof(width) === 'undefined' || typeof(symbol) === 'undefined')  {
    error.reason += 'must be 3 arguments height, width, symbol;';
  } else {
    if(isNaN(parseInt(height, 10)) || !isFinite(+height) || +height < 1) {
      error.reason += ' height must be positive number above 1;';
    }  
    if(isNaN(parseInt(width, 10)) || !isFinite(+width) || +width < 1) {
      error.reason += ' width must be positive number above 1;';
    }
    if(symbol == '' || /^\s+$/.test(symbol)) {
      error.reason += ' symbol must be one or more symbols';
    }
  }  
  return error.reason ? error : true;  
}


function chessBoard(height, width, symbol) {

  if(checkArguments(height, width, symbol) !== true) {
    return checkArguments(height, width, symbol);
  }

  let result = '';
  width = Math.trunc(width);
  height = Math.trunc(height);

  for (let i = 0;  i < height; i++) {
    for (let j = 0; j < width; j++) {
      if(i % 2 !== 0) {
        result +=` ${symbol}`;
      } else {
        result +=`${symbol} `;
      } 
    }
    result += '\n';    
  }
  return result;
}

console.log(chessBoard('5' , '3h', 't'))

