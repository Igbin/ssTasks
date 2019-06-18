function findPalindrome(number) {
  if(checkArguments(number)) {
    return checkArguments(number);
  }

  let num = String(number),
      length = num.length;

  if(isPalindorme(num)) {
    return num.length > 1 ? num : 0;
  }

  for (let i = 0; i < length; i++) {
    for (let j = length; j >=2; j--) {
      if(isPalindorme(num.substring(i, i + j))) {
        return num.substring(i, i + j).length > 1 ? num.substring(i, i + j) : 0;
      }
    }
  }
}


function checkArguments(number) {
  let error = {
    status: 'failed',
    reason: ''
  }

  if(!number || typeof(number) !== 'number') {
    error.reason = 'argument must be positive number';
  }
  
  return error.reason ? error : false;  
}


function isPalindorme(number) {
  return number === number.split('').reverse().join('');
}


console.log(findPalindrome(123215))