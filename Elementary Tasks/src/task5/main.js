function checkArguments(context) {

  let error = {
    status: 'failed',
    reason: ''
  }

  if(Object.prototype.toString.call(context) !== '[object Object]') {
     error.reason = 'argument must be object context';
  } else if (Object.values(context).length < 2 || typeof(context.max) === 'undefined' || typeof(context.min) === 'undefined') {
             error.reason = 'object context mast have min and max value';
  } else if (typeof(context.min) !== 'string' || typeof(context.max) !== 'string') {
            error.reason = 'min and max must be in strings format';
  } else if(!isFinite(+context.min) || !isFinite(+context.max) || String(context.min).length != 6 || String(context.max).length != 6) {
             error.reason = 'min and max must be number of 6 digits';
  }

  return error.reason ? error : true;  
}



function isHappyEasy(ticket) {
  
  ticket = String(ticket);

  let left = +ticket[0] + +ticket[1] + +ticket[2];
  let right= +ticket[3] + +ticket[4] + +ticket[5];

  let leftPart = ticket.split('').slice(0, ticket.length/2).reduce((acc, cur) => +acc + +cur);
  let rightPart = ticket.split('').slice(ticket.length/2, ticket.length).reduce((acc, cur) => +acc + +cur);

 return leftPart === rightPart;
}

  
function isHappyHard(ticket) {
  
  ticket = String(ticket);

  // let odds = +ticket[0] + +ticket[2] + +ticket[4];
  // let evens = +ticket[1] + +ticket[3] + +ticket[5];

  let odds = 0, evens = 0;

  ticket.split('').forEach((el) => {
    if(el % 2 === 0) {
      evens += +el
    } else {
      odds += +el
    }
  })

 return odds === evens;
}

function compareHappyTickets(context) {

  if(checkArguments(context) !== true) {
    return checkArguments(context)
  }

  let ticketsArr = [],
      eassyTickets = 0,
      hardTickets = 0,
      result = {};
  
  for (let i = context.min; i <= context.max; i++) {
    ticketsArr.push(i)
  }
  
  ticketsArr.forEach(ticket => {
    if(isHappyEasy(ticket)) 
      eassyTickets++;
    if(isHappyHard(ticket)) 
      hardTickets++;
  });


  if(eassyTickets > hardTickets) {
    result.winner = 'easy way';
  } else if(eassyTickets < hardTickets) {
    result.winner = 'complex way';
  } else {
    result.winner = 'draw';
  }
  result.easyWay = eassyTickets;
  result.complexWay = hardTickets;

  return result;
}
  
let context = {
  min: '000001',
  max: '999999'
}

console.log(compareHappyTickets(context))
  
  