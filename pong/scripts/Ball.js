export class Ball {
    constructor(stageWidth, stageHeight, radius, speed){
        this.radius = radius;
        this.vx = speed;
        this.vy = speed;

        const diameter = this.radius * 2;
        this.x = diameter + (Math.random() * (stageWidth - diameter));
        this.y = Math.random() * 5 + diameter;
    }

    draw(ctx, stageWidth, stageHeight,bar) {
        this.x += this.vx;
        this.y += this.vy;

        this.bounceWindow(stageWidth, stageHeight);
        this.bounceBar(bar);

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    bounceWindow(stageWidth, stageHeight) {
        const minX = this.radius;
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius;

        if (this.x <= minX || this.x >= maxX){
            this.vx *= -1;
            this.x += this.vx;
        } else if (this.y <= minY){
            this.vy *= -1;
            this.y += this.vy;
        } else if (this.y >= maxY){
            this.vy = 0
            this.y = 0
            alert('dead');
            window.location.reload()
        }
    }

    bounceBar(bar) {
        const minX = bar.x;
        const maxX = bar.x + bar.barWidth;
        const minY = bar.y + bar.barHeight - this.radius;
        // const maxY = stageHeight - this.radius;

        if (this.x >= minX && this.x <= maxX && this.y >= minY){
            this.vy *= -1;
            this.y += this.vy;
        }
    }

    deathCheck() {

    }
}