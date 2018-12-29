
  const hourHand = document.querySelector('.hourhand');
  const minuteHand = document.querySelector('.minutehand');
  const secondHand = document.querySelector('.secondhand');
  const time = document.querySelector('.time');
  const alarmtime = document.querySelector('.alarmtime');
  const name = document.querySelector('.name-tag');
  const audio = document.querySelector('.audio');
  const alarmsound = document.querySelector('.alarmaudio');
  const hour = document.querySelector('#hour');
  const minute = document.querySelector('#minute');
  const second = document.querySelector('#second');
  const alarmBtn = document.querySelector('#alarmBtn');
  var isAlarmBlown = false;
  var alarmInterval;
  var c_hour;
  var c_min;
  var c_sec;

  function clock(){
    const day = new Date();
    const seconds = day.getSeconds();
    const secondDegree = ((seconds/60) * 360) + 360;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    audio.play();
    const minutes = day.getMinutes();
    c_min = minutes;
    const minuteDegree = ((minutes/60) * 360);
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    const hours = day.getHours();
    c_hour = hours;
    const hourDegree = ((hours/12) * 360);
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    time.innerHTML = '<span>' + '<strong>' + hours + '</strong>' + ' : ' + minutes + ' : ' + '<small>' + seconds +'</small>'+ '</span>';
  }


  setInterval(clock,1000);
  setInterval(checkAndBlowAlarm,1000);

  alarmBtn.onclick = function(){
    alarmtime.innerHTML = '<span>' + '<strong>' + hour.value + '</strong>' + ' : ' + minute.value + ' : ' + '<small>' + second.value +'</small>'+ '</span>';
  }

  function checkAndBlowAlarm(){
    if(isAlarmBlown){
      isAlarmBlown = false;
      // alarmaudio.stop();
    }else{
      if(c_hour == hour.value && c_min == minute.value){
        isAlarmBlown = true;
        alarmsound.play();
      }
    }
  }
