function compareHappyTickets(context) {
  if(checkArguments(context)) {
    return checkArguments(context)
  }

  let {min, max} = context;

  let result = {
      winner: '',
      eassyTickets: 0,
      hardTickets: 0
    };
  
  for (let i = min; i <= max; i++) {
      if(isHappyTicketEasy(i)) 
         result.eassyTickets++;
      if(isHappyTicketHard(i)) 
         result.hardTickets++;
  }

  if(result.eassyTickets > result.hardTickets) {
    result.winner = 'Easy Way';
  } else if (result.eassyTickets < result.hardTickets) {
    result.winner = 'Hard Way';
  } else {
    result.winner = 'Draw';
  }

  return result;
}
  


function checkArguments(context) {
  let error = {
    status: 'failed',
    reason: ''
  }

  let {min, max} = context;

  if(typeof(min) === 'undefined' || typeof(max) === 'undefined') {
     error.reason = 'argument must be object context with min and max values';
  } else if (typeof(min) !== 'string' || typeof(max) !== 'string') {
            error.reason = 'min and max must be in strings format';
  } else if(typeof(+min) !== 'number' || typeof(+max) !== 'number' 
            || min.length != 6 || max.length != 6) {
            error.reason = 'min and max must be number of 6 digits';
  } else if (+max < +min) {
            error.reason = 'invalid range';
  }

  return error.reason ? error : false;  
}


function isHappyTicketEasy(ticket) {

  ticket = String(ticket);

  if(ticket.length < 6){
    ticket = ticket.padStart(6, "0")
  }
  
  ticket = ticket.split('');

  let leftPart = ticket.slice(0, ticket.length/2).reduce((acc, cur) => +acc + +cur),
      rightPart = ticket.slice(ticket.length/2, ticket.length).reduce((acc, cur) => +acc + +cur);

  return leftPart === rightPart;
}

  
function isHappyTicketHard(ticket) {
  let odds = 0, 
      evens = 0;

  ticket= String(ticket);

  if(ticket.length < 6){
      ticket = ticket.padStart(6, "0")
  }

  ticket.split('').forEach((el) => {
    if(+el % 2 === 0) {
      evens += +el;
    } else {
      odds += +el;
    }
  })

 return odds === evens;
}



let context = {
  min: '000000',
  max: '999999'
}


console.log(compareHappyTickets(context))





 // return +ticket[0] + +ticket[1] + +ticket[2] === +ticket[3] + +ticket[4] + +ticket[5];
 