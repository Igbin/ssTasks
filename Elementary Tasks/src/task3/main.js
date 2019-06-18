function compareTraingles (arr) { 
  if(checkArguments(arr)) {
    return checkArguments(arr) 
  }

  arr = arr.map(obj => {
        return  findArea(obj)
        })
        .sort((a, b) => b.area - a.area)
        .map(obj => {
        return obj = obj.vertices;
        });

  return arr;  
}


function checkArguments(array) {
  let error = {
    status: 'failed',
    reason: ''
  }

  array.forEach(obj=>{  
    let [a,b,c,d] = Object.values(obj);
    
    if(Object.values(obj).length < 4){
        error.reason = 'argument must be array of objects with name and three sides';
    } else if(Object.keys(obj)[1] +  Object.keys(obj)[2] + Object.keys(obj)[3] !== obj.vertices.toLowerCase()) {     
              error.reason = 'sides must be named like vertice';
    } else if(typeof(b) !== 'number' || typeof(c) !== 'number'|| typeof(d) !== 'number'
              || b < 0 || c < 0 || d < 0) {
              error.reason = 'all sides must be positive numbers';
    } else if(!(b + c > d) || !(b + d > c) || !(c + d > b)){
              error.reason = 'the summ of two sides must be bigger third side';           
    } 
  })

  return error.reason ? error : false;  
}


function findArea(obj) {
  let [a,b,c] = Object.values(obj).slice(1, 4);
  let p = (a + b + c) / 2;
  
  obj.area =  Math.sqrt(p * (p - a) * (p - b) * p - (c));

  return obj;
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



