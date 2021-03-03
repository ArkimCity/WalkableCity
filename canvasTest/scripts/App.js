import { Ball } from './Ball.js';
import { Bar } from './Bar.js';

class App {
    constructor(){
        this.canvas = document.getElementById("canvasView");
        this.ctx = this.canvas.getContext('2d');
        
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
        
        this.ball = new Ball(this.stageWidth, this.stageHeight,15,8);
        this.bar = new Bar(this.stageWidth, this.stageHeight);
        
        window.onkeydown = (e) => this.bar.move(e.key,this.ctx, this.stageWidth, this.stageHeight);
        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2,2);
    }

    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight);

        this.bar.draw(this.ctx, this.stageWidth, this.stageHeight)
        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight);
    }
    
}

window.onload = () => {
    new App();
}