function checkArguments(array) {

  let error = {
    status: 'failed',
    reason: ''
  }

  if(!Array.isArray(array)) {
    error.reason = 'argument must be array';
  } else {
    array.forEach(obj=>{
      if (obj.constructor !== Object  ) {
         error.reason = 'argument must be array of objects';
      } else if(Object.values(obj).length < 4){
        error.reason = 'each triangle must have name and three sides';
      } else if(Math.sign(parseFloat(obj.a, 10)) != 1 || Math.sign(parseFloat(obj.b, 10)) != 1 || Math.sign(parseFloat(obj.c, 10)) != 1){
        error.reason = 'sides must be positive numbers';
      }
    })
  } 
  return error.reason ? JSON.stringify(error) : true;  
}


function findSquares(arr) {

  let triangles = {};

  arr.forEach(triangle => {
    let p = (parseFloat(triangle.a, 10) + parseFloat(triangle.b, 10) + parseFloat(triangle.c, 10)) / 2;
    let area =  Math.sqrt(p*(p - parseFloat(triangle.a, 10))*(p - parseFloat(triangle.b, 10))*(p - parseFloat(triangle.c, 10)));
    triangles[triangle.vertices] = area;
  })

  return triangles;
}


function compareTraingles (arr) { 

  if(checkArguments(arr) !== true) {
    return checkArguments(arr)
  }

  let result = [];
  let triangles = findSquares(arr);
  let areasArr = Object.values(triangles).sort((b,a) => a - b);
  const length = areasArr.length;
  
  for (let i = 0; i < length; i++){
    for(let triangle in triangles) {
      if(triangles[triangle] === areasArr[i]) 
        result.push(triangle);
    }
  } 

  return result.join();  
}


  let traingleArr = [
    {vertices: 'ABC',
      a: '200g',
      b: 200,
      c: 223},
    {vertices: 'DEF',
      a: 200,
      b: 200,
      c: 223.35},
    {vertices: 'GHI',
      a: 24,
      b: 26,
      c: 26.36}
  ]

console.log(compareTraingles(traingleArr))



