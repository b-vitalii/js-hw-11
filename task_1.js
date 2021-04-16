const colors = [
    'red',
    'green',
    'violet',
    'gray',
    'blue',
    'yellow',
    'puce',
    'rust',
    'sapphire',
    'pink',
    'pear',
    'vanilla',
    'viridian',
    'sana',
    'brown',
  ];

let refs = {
    btnStart: document.querySelector('.btn_start'),
    btnStop: document.querySelector('.btn_stop'),
    body: document.querySelector('body'),
    h1: document.querySelector('.title_color_changer')
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

let intervalColorChange;

refs.btnStart.addEventListener('click', startChangeColor)
refs.btnStop.addEventListener('click', stopChangeColor)

function startChangeColor() {
    refs.body.style.background = '';
    intervalColorChange = setInterval(() => { 
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
   }, 300)
    refs.btnStart.disabled = true;
    refs.h1.textContent = 'Press STOP to stop change color';
}

function stopChangeColor() {
    clearInterval(intervalColorChange);
    refs.body.style.background = "url('https://a.d-cd.net/oakVV6eFjpZlMMR_I2lj3PoqJMg-960.jpg') no-repeat center top";
    refs.btnStart.disabled = false;
    refs.h1.textContent = 'Press start to change color of the body';
};