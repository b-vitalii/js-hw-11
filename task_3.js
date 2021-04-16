// const refs = {
//     days: document.querySelector('.value[data-value="days"]'),
//     hours: document.querySelector('.value[data-value="hours"]'),
//     mins: document.querySelector('.value[data-value="mins"]'),
//     seconds: document.querySelector('.value[data-value="secs"]'),
//     timerOutput: document.getElementById('timer-1'),
//   };
// console.log(refs);

class Timer {
    constructor({ targetDate }) {
      this.targetDate = targetDate;
      this.refs = {
        days: document.querySelector('.value[data-value="days"]'),
        hours: document.querySelector('.value[data-value="hours"]'),
        mins: document.querySelector('.value[data-value="mins"]'),
        seconds: document.querySelector('.value[data-value="secs"]'),
        timerOutput: document.querySelector('#timer-1'),
      };
    }
  
    interval = setInterval(() => {
      let nowDate = Date.now();
      let time = this.targetDate - nowDate;
      this.timerUpdate(time);
      this.timeOver(time);
    }, 1000);
    
    timerUpdate(time) {
        let days = Math.floor(time / (1000 * 60 * 60 * 24));
        let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((time % (1000 * 60)) / 1000);
        this.refs.days.textContent = `${days}`,
        this.refs.hours.textContent = `${hours}`,
        this.refs.mins.textContent = `${mins}`,
        this.refs.seconds.textContent = `${seconds}`;
    }
  
    timeOver(time) {
      if (time < 0) {
        clearInterval(this.interval);
        this.refs.timerOutput.textContent = "Time is over";
        
      }
    }
  };
  new Timer({targetDate: new Date("July 24, 2021")});

