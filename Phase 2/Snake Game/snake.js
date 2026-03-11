// selection
const body = document.querySelector("body");
const canva = document.getElementById('canva');
const ctx = canva.getContext('2d');
const score = document.querySelector("#score");
const resetBtn = document.querySelector("#resetBtn")
const canvaWidth = canva.clientWidth;
const canvaHeight = canva.clientHeight;
const snakeColor = 'lightgreen';
const foodColor = 'red';
const grid_size = 20;


// css Styles
body.style.backgroundColor = 'lightblue';
body.style.textAlign = 'center';
body.style.margin = '10px';
canva.style.backgroundColor = 'black';

score.style.fontSize = '30px';
resetBtn.style.padding = '10px 20px';
resetBtn.style.cursor = 'pointer';
// canva.style.position = 'absolute';
// canva.style.top = '50%';
// canva.style.left = '50%';
// canva.style.transform = 'translate(-50%,-50%)';

// Program

let snake = [{x:10,y:10}];
ctx.fillStyle = snakeColor;
