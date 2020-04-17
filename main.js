const canvas=document.querySelector(".canvas");
var score=document.getElementById("score");
const ctx= canvas.getContext("2d");
const scale=10;
const rows=canvas.height/scale;
const columns = canvas.width/scale;

var snake;

(function setup() {
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();
    window.setInterval(()=> {
        ctx.clearRect(0, 0, canvas.width, canvas.height )
        
        fruit.draw();
        snake.update();
        snake.draw();
       
        if(snake.eat(fruit)){
           fruit.pickLocation();
        }
        if(snake.checkCollision()){
            alert(`You lost, your score is ${score.innerText}!`);
        };
        score.innerText=snake.total;
       
    },250);
}());
window.addEventListener('keydown', ((event)=>{
    const direction =  event.key.replace('Arrow', '');
    snake.changeDirection(direction);
}));