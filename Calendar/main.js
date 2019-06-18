function createCalendar (){
  const monthes = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
  const dayNames = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
  let calText = '',
      pageDate;

  createCalHeader(); 
  createDays(new Date(new Date().getFullYear(), +new Date().getMonth()));




  function createCalHeader() {
    getTime();
    setInterval(getTime, 1000);

    document.querySelector('.cal-header_date').innerHTML = `${dayNames[+new Date().getDay()-1]},
    ${new Date().getDate()} ${monthes[+new Date().getMonth()].slice(0, -1)}я ${new Date().getFullYear()} г.`;

    Array.from(document.getElementsByClassName('month-switch')).forEach(el => {
      el.addEventListener('click', () => {
         switchMonth(el.id)
       })
     });
   
     Array.from(document.getElementsByClassName('day-switch')).forEach(el => {
       el.addEventListener('click', switchDay)
     });
  }


  function getTime() {
    document.querySelector('.cal-header_watch').innerHTML = new Date().toLocaleTimeString();
  }


  function createDays(date) {
    let currPageMonth = date.getMonth(),
        dateOfFirstDay = new Date(date.getFullYear(), date.getMonth()),
        dayOfWeekFirstDay = getDayOfWeek(dateOfFirstDay),
        lastDayOfPrevMonth = new Date(date.getFullYear(), currPageMonth, 0).getDate(),
        cellsCount = 0;

    for (let i = 0; i < dayOfWeekFirstDay; i++) {
        calText += `<div class = "prev-month">${(+lastDayOfPrevMonth - dayOfWeekFirstDay + 1 + i)}</div>`;
        cellsCount++;
    }

    while (cellsCount != 42) {
          if(dateOfFirstDay.getMonth() == currPageMonth) {
            calText += `<div class = "cur-month">${dateOfFirstDay.getDate()}</div>`;
          } else {
            calText += `<div class = "next-month">${dateOfFirstDay.getDate()}</div>`;
          }
          dateOfFirstDay.setDate(dateOfFirstDay.getDate() + 1);
          cellsCount++;
    }

    document.querySelector('.cal-days').innerHTML = calText;
    document.querySelector('.month-name').innerHTML = `${monthes[currPageMonth]} ${date.getFullYear()} г.`;
    pageDate = date;
  
    Array.from(document.getElementsByClassName('cur-month')).forEach(el =>{  
      if(el.innerHTML == new Date().getDate() && new Date().getMonth() == pageDate.getMonth()
         && new Date().getFullYear() == pageDate.getFullYear()) {
         el.classList.add('today', 'active' , 'today-active');
      }
    })

    Array.from(document.querySelector('.cal-days').children).forEach(el =>{
      el.addEventListener('click', clickDay)
    }) 
  }


  function getDayOfWeek(date) { 
    let day = date.getDay();
    if (day == 0) day = 7;
     return day - 1;
  }


  function switchMonth(action) {
    calText = '';

    if(action == 'goNextMonth') {
      createDays(new Date(pageDate.getFullYear(), +pageDate.getMonth()+1))
      document.querySelector('.cal-days div').classList.add('active');
    } else {
      createDays(new Date(pageDate.getFullYear(), +pageDate.getMonth()-1));
      document.querySelector('.cal-days').lastChild.classList.add('active')
    }

    document.getElementsByClassName('today')[0] ? document.getElementsByClassName('today')[0].classList.remove('today-active', 'active') : false;
  }


  function switchDay() {
    let curActive =  document.getElementsByClassName('active')[document.getElementsByClassName('active').length-1],
        prevActive = document.getElementsByClassName('active')[0];

    document.getElementsByClassName('today')[0] ? document.getElementsByClassName('today')[0].classList.remove('today-active', 'active') : false;

    if(this.classList.contains('btn-nextday')) {
      if(!curActive.nextSibling) {
        switchMonth('goNextMonth')
      } else {  
      if(curActive.nextSibling.classList.contains('today')) {
        curActive.nextSibling.classList.add('today-active');
      }
        curActive.nextSibling.classList.add('active');
        prevActive.classList.remove('active');
      }
    } else {
      if(!curActive.previousSibling) {
        switchMonth();
      } else {
      if(curActive.previousSibling.classList.contains('today')) {
        curActive.previousSibling.classList.add('today-active');
      }
       curActive.previousSibling.classList.add('active');
       curActive.classList.remove('active');
      }
    }
  }


  function clickDay(e){
    Array.from(document.querySelector('.cal-days').children).forEach(el =>{
      el.classList.remove('active', 'today-active');
    }) 
    if(event.target.classList.contains('today')) {
      event.target.classList.add('today-active', 'active')
    } else {
      event.target.classList.add('active')
    }  
  }

}

createCalendar()

