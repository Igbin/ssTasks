function fibonachi(context) {
  if(checkArguments(context)) {
    return checkArguments(context);
  }

  return 'length' in context ? findFibsByLength(context.length) : findFibsByRange(context.min, context.max);
}


function checkArguments(context) {
  let error = {
    status: 'failed',
    reason: ''
  }

  if(context.constructor !== Object) {
    error.reason = 'context must be object';
  } else if (!('min' in context) && !('max' in context) && !('length' in context)) {
             error.reason = 'context must have min and max or length values';
  } else if ('min' in context && !('max' in context) 
            || !('min' in context) && 'max' in context) {
            error.reason = 'context must have min and max or length values';
  } else if(typeof(context.min) !== 'number' || typeof(context.max) !== 'number' 
            || +context.min < 0 || +context.max < 0) {
            error.reason = 'min and max must be positive numbers';
  } else if('length' in context &&  typeof(+context.length) !== 'number' 
            || 'length' in context && +context.length < 0) {
            error.reason = 'length must be positive number';
  } 

  return error.reason ? error : false;  
}


function findFibsByLength(length) {
  let fibs = [0, 1]; 

  for (i = 2; ; i++) {
    fibs[i] = fibs[i-1] + fibs[i-2];
    if(String(fibs[i]).length > length) {
      break;
    }
  }   

  fibs = fibs.filter(el => {
    return String(el).length == length ;
  })

  return fibs;
}


function findFibsByRange(min, max) {
  let fibs = [0, 1]; 
  
  for (let i=2; ; i++) {
    fibs[i] = fibs[i-1] + fibs[i-2];
    if(fibs[i] >= max){
      break;
    }
  }  

  fibs = fibs.filter(el =>{
    return el >= min && el <= max;
  })

  return fibs;
}



let context2 = {
  min: 22,
  max:144,
  length: 1
}

console.log(fibonachi(context2))
  