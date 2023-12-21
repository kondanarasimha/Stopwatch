const startButton = document.querySelector('.js-start-button');

      const resetButton = document.querySelector('.js-reset-button');

      const flagButton = document.querySelector('.flag-button');

      let flagText = document.querySelector('.js-flag-text');


      startButton.addEventListener('click',()=> {
        buttonChanging();
      });

      resetButton.addEventListener('click',()=> {
        reset();
      });

      flagButton.addEventListener('click',()=> {
        flagOnPage();
      })

     

      function buttonChanging() {
        if(startButton.innerHTML === 'START') {
          start();
        startButton.innerHTML = 'STOP'
        } else if (startButton.innerHTML === 'STOP') {
          stop();
          startButton.innerHTML = 'START'
        }
      }
      

      let isRunning = false,intervalId = 0;
      
      let timing = { 
        hours: 0,
        min: 0,
        seconds: 0
      }

      function start() {
      if(!isRunning) {
      intervalId = setInterval(updTimeing,1000);
        isRunning = true;
      }
    }

    function stop() {
      clearInterval(intervalId);
      isRunning = false;
    }

    function updTimeing() {
      timing.seconds++;
      if(timing.seconds === 60) {
        timing.min++;
        timing.seconds = 0;
      } if(timing.min === 60) {
        timing.hours++;
      }
      onPage();
    }

    function reset() {
      buttonChanging();
      stop();
      timing.seconds = 0;
      intervalId = 0;
      timing.min = 0;
      onPage();
    }

    function onPage() {
      const secondsText = document.querySelector('.js-seconds-text').innerHTML = timing.seconds;
      const minText = document.querySelector('.js-min-text').innerHTML = timing.min;
      const hoursText = document.querySelector('.js-hours-text').innerHTML = timing.hours;
    }

    function flagOnPage() {
     flagText.innerHTML = `Hours: ${timing.hours}  Mintues: ${timing.min}  Seconds: ${timing.seconds}`;
    };
