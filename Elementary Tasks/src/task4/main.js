function checkArguments(number) {

  let error = {
    status: 'failed',
    reason: ''
  }

  if(!number ||  isNaN(parseInt(number, 10)) || parseInt(number, 10) < 9) {
    error.reason = 'argument must be number above 9';
  }
  return error.reason ? error : true;  
}


function isPalindorme(number) {
  return number === number.split('').reverse().join('');
}


function findPalindrome(number) {

  if(checkArguments(number) !== true) {
    return checkArguments(number);
  }

  let result = [];
  let num = String(parseInt(number, 10));
  let length = num.length;

  if(isPalindorme(num)) {
    return num;
  }

  for (let i = 0; i < length; i++) {
    for (let j = 2; j < length; j++) {
      if(isPalindorme(num.substring(i, i + j))) {
         result.push(+num.substring(i, i + j))
      }
    }
  }
  return result.sort((a,b) => {return b - a})[0] || 0;
}


console.log(findPalindrome())