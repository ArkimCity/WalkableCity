export class Bar {
    constructor(stageWidth, stageHeight) {
        this.barWidth = 200;
        this.barHeight = 20;
        this.x = stageWidth/2 - this.barWidth/2;
        this.y = stageHeight - this.barHeight*5;
    }

    draw(ctx) {
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(this.x, this.y, this.barWidth, this.barHeight);
    }

    move(keyboardEvent, stageWidth) {
        console.log(stageWidth);
        if (keyboardEvent == 'ArrowRight'){
                this.x += 50
        }else if(keyboardEvent == 'ArrowLeft'){
            this.x -=50
        }else{
            console.log('else');
        }
    }
    
}
