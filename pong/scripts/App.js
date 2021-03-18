import { Ball } from './Ball.js';
import { Bar } from './Bar.js';

class App {
    constructor(){
        this.canvas = document.getElementById("canvasView");
        this.ctx = this.canvas.getContext('2d');
        this.ball = new Ball(this.stageWidth, this.stageHeight,15,8);
        this.bar = new Bar(this.stageWidth, this.stageHeight);
        
        this.resize();

        window.addEventListener('resize', this.resize.bind(this), false);

        window.addEventListener('mousemove', (event) => { this.bar.x = event.clientX }); // 마우스와 bar 연동 

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
        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight,this.bar);
    }
    
}

window.onload = () => {
    new App();
}

// 처음에 constructor는 전체적인 플레이스 홀딩 역할을 해주고, 이후에 api 사용 이나 기타 데이터 변경이 있을 경우 
// 데이터를 교체해주거나 re rendering 해주는 방식으로 변경이 이루어지는 것으로 이해할 수 있다.
