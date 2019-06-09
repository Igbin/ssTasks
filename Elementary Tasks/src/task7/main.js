function checkArguments(context) {

  let error = {
    status: 'failed',
    reason: ''
  }

  if(Object.prototype.toString.call(context) !== '[object Object]') {
    error.reason = 'argument must be object context';
  } else if ('min' in context && !('max' in context) 
             || !('min' in context) && 'max' in context) {
            error.reason = 'context must have min and max or length values';
  } else if(!isFinite(+context.min) || !isFinite(+context.max) || +context.min < 0 || +context.max < 0) {
            error.reason = 'min and max must be positive numbers';
  } else if( 'length' in context &&  !isFinite(+context.length) || 'length' in context && +context.length < 0) {
            error.reason = 'length must be positive number';
  } 

  return error.reason ? error : true;  
}


function findFibsByLength(length) {

  let fibs = [0, 1]; 
  let result = [];

  for (i = 2; ; i++) {
    fibs[i] = fibs[i-1] + fibs[i-2];
    if(String(fibs[i]).length == length) {
      result.push(fibs[i])
    }
    if(String(fibs[i]).length > length) {
      break;
    }
  }    
  return result;
}


function findFibsByRange(min, max) {

  let fibs = [0, 1]; 
  let start, end;

  for (let i=2; ; i++) {
    fibs[i] = fibs[i-1] + fibs[i-2];
    if(fibs[i] >= min && start === undefined) {
      start = fibs[i];
    } 
    if(fibs[i] === max){
       end = fibs[i];
       fibs =  fibs.slice(fibs.indexOf(start), fibs.indexOf(end)+1);
       break;
    }
    if(fibs[i] > max) {
      end = fibs[i];
      fibs =  fibs.slice(fibs.indexOf(start), fibs.indexOf(end));
      break;
    }
  }  
  return fibs;
}


function fibonachi(context) {

  if(checkArguments(context) !== true) {
    return checkArguments(context);
  }

  return 'length' in context ? findFibsByLength(context.length) : findFibsByRange(context.min, context.max);
}


let context2 = {
  min: 1,
  max: 55,
  length: '1'
}

console.log(fibonachi(context2))
  