function checkArguments(env1, env2) {

  let error = {
    status: 'failed',
    reason: '' 
  }

  if(Object.prototype.toString.call(env1) !== '[object Object]' 
    || Object.prototype.toString.call(env2) !== '[object Object]') {
    error.reason = 'arguments must be two objects';
  } else if(Object.values(env1).length < 2 || Object.values(env2).length < 2) {
          error.reason = 'all envelops must have two sides';
  } else if(!isFinite(+env1.a) || !isFinite(+env1.b) || !isFinite(+env2.c) || !isFinite(+env2.d)
            || +env1.a < 0 || +env1.b < 0 || +env2.c < 0 || +env2.d < 0){
          error.reason = 'all sides must be positive numbers';
  } 
  return error.reason ? error : true;  
}


function envelopComparison(env1, env2) {


  if(checkArguments(env1, env2) !== true) {
    return checkArguments(env1, env2);
  }

  if(env1.a < env2.c && env1.b < env2.d) {
    return 1;
  } else if (env2.c < env1.a && env2.d < env1.b) {
    return 2;
  } else if(env1.a > env2.c && 
    env2.d >= 2 * env1.a * env1.b * env2.c + (Math.pow(env1.a, 2) - Math.pow(env1.b, 2) * 
    Math.sqrt((Math.pow(env1.a, 2) + Math.pow(env1.b, 2) - Math.pow(env2.c, 2))) /
    (Math.pow(env1.a, 2) + Math.pow(env1.b, 2)))) {
    return 1;
  } else if(env2.c > env1.a && 
    env1.b >= 2 * env2.c * env2.d * env1.a + (Math.pow(env2.c, 2) - Math.pow(env2.d, 2) * 
    Math.sqrt((Math.pow(env2.c, 2) + Math.pow(env2.d, 2) - Math.pow(env1.a, 2))) /
    (Math.pow(env2.c, 2) + Math.pow(env2.d, 2)))) {
    return 2;
  } else {
    return 0;
  }
}



let env1 = {
  a: 'true',
  b: '31',
}

let env2 = {
  c: '14',
  d: '30',
}

let obj = [1,2]

console.log(envelopComparison(env1, env2))

console.log(obj.constructor === Object)