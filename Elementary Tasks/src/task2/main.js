function envelopComparison(env1, env2) {
  if(checkArguments(env1, env2)) {
    return checkArguments(env1, env2);
  }

  let {a, b} = env1;
  let {c, d} = env2;

  if(a < b) {
    [a, b] = [b, a]
  }

  if(c < d) {
    [c, d] = [d, c]
  }

  if(a < c && b < d ||
    a < c && b > (2 * c * d * a + (c * c - d * d) * Math.sqrt(c * c + d * d - a * a)) / (c * c + d * d)) {
    return 1;
  } else if (a > c && b > d ||
    a > c && b < (2 * c * d * a + (c * c - d * d) * Math.sqrt(c * c + d * d - a * a)) / (c * c + d * d)) {
    return 2;
  } else {
    return 0;
  }
}

function checkArguments(env1, env2){
  let error = {
    status: 'failed',
    reason: '' 
  }

  let {a, b} = env1;
  let {c, d} = env2

  if(typeof(a) ==='undefined' || typeof(b) ==='undefined' 
    || typeof(c) ==='undefined' || typeof(d) ==='undefined') {
    error.reason = 'arguments must be two objects with two sides a,b and c,d';
  } else if(typeof(a) != 'number' || typeof(b) != 'number' || typeof(c) != 'number'|| typeof(d) != 'number'
            || a < 0 || b < 0 || c < 0 || d < 0){
           error.reason = 'all sides must be positive numbers';
  } 

  return error.reason ? error : false;  
}


let env1 = {
  a: 24,
  b: 31,
}

let env2 = {
  c: 20,
  d: 30,
}


console.log(envelopComparison(env1, env2))

