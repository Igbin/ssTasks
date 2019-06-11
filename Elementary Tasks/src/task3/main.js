function checkArguments(array) {

  let error = {
    status: 'failed',
    reason: ''
  }

  if(!Array.isArray(array)) {
    error.reason = 'argument must be array';
  } else {
    array.forEach(obj=>{   
      let a = +Object.values(obj)[1];
      let b = +Object.values(obj)[2];
      let c = +Object.values(obj)[3];
      if (obj.constructor !== Object  || Object.values(obj).length < 4) {
         error.reason = 'argument must be array of objects with name and three sides';
      } else if(Object.keys(obj)[1] !== obj.vertices[0].toLowerCase() || 
                Object.keys(obj)[2] !== obj.vertices[1].toLowerCase() ||
                Object.keys(obj)[3] !== obj.vertices[2].toLowerCase()) {     
                error.reason = 'sides must be named like vertice';
      } else if(isNaN(parseFloat(a, 10))  || isNaN(parseFloat(b, 10)) || isNaN(parseFloat(c, 10)) 
                || !isFinite(a) || !isFinite(b) || !isFinite(c) 
                || a < 0 || b < 0 || c < 0) {
                error.reason = 'sides must be positive numbers';
      } else if(!(a + b > c) || !(a + c > b) || !(b + c > a)){
               error.reason = 'the summ of two sides must be above third side';           
        } 
    })
  } 
  return error.reason ? error : true;  
}


function findArea(obj) {
    let a = +Object.values(obj)[1];
    let b = +Object.values(obj)[2];
    let c = +Object.values(obj)[3];
    let p = (a + b + c) / 2;
    let area =  Math.sqrt(p * (p - a) * (p - b) * p - (c));
    return area;
}


function compareTraingles (arr) { 

  if(checkArguments(arr) !== true) {
    return checkArguments(arr) 
  }

  arr = arr.map(obj => {
        return obj =  {vertices: obj.vertices,
                       area: findArea(obj)}
        });

  arr.sort((a, b) => b.area - a.area);

  arr = arr.map(obj => {
        return obj = obj.vertices;
        })

  return arr;  
}



  let traingleArr = [
    {vertices: 'ABC',
      a: 20,
      b: 20,
      c: 22},
    {vertices: 'DEF',
      d: 200,
      e: 200,
      f: 223.35},
    {vertices: 'GHI',
      g: 24,
      h: 26,
      i: 26.36}
  ]

console.log(compareTraingles(traingleArr))



