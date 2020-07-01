class Color {
    constructor(red, green, blue, alpha) {
        this.r = red;
        this.g = green;
        this.b = blue;
        this.a = alpha;
    }
}
class Frame{
    constructor(imageData) {
        this.imageData = imageData;
        this.pixels = this.imageData.data;
    }
}
class Pong {
    constructor(canvas, width, height) {
        this.canvas = canvas;
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style = "border: 3px solid #bababa";
        this.lastRender = 0;

        this.ctx = canvas.getContext('2d');
    }
    
    start() {
        window.requestAnimationFrame(this.loop);
    }
    
    loop = (timestamp) => {
        let progress = timestamp = this.lastRender;

        this.draw();
        
        console.log(progress);

        this.lastRender = timestamp;
        
        window.requestAnimationFrame(this.loop);
    }
    draw() {
        const rectangle = new Rectangle(40, 180, 50, 50,  new Color(0,0,0))
        const circle = new Circle (200,200,50, new Color(0,0,0))
        
        let imageData = this.ctx.createImageData(this.canvas.width, this.canvas.height);

        const frame = new Frame(imageData);
        
        for (let w = 0; w < 640; w++) {
            for (let h = 0; h < 480; h++ ) {
                frame.setPixel(w, h, new Color(131, 166, 175,(h)));
            }
        }


        this.ctx.putImageData(frame.imageData, 0, 0);
        rectangle.draw();
        circle.draw()
    }
}

class Rectangle {
    constructor(width, height, x, y, color){
    this.width = width;
    this.height = height;
    this.x = x
    this.y = y
    this.color = color
    this.ctx = document.getElementById('pong').getContext('2d')
    
    }
    draw() {
          this.ctx.fillStyle = `rgb(${this.color.r},${this.color.g},${this.color.b})

          this.ctx.fillRect(this.x, this.y, this.width, this.height, this.color);
        }
}

class Circle {
    constructor(x, y, radious, color){    
    this.x = x
    this.y = y
    this.radious = radious
    this.color = color        
    this.ctx = document.getElementById('pong').getContext('2d')

}
    draw(){
        this.ctx.lineWidht = 2;
        this.ctx.arc(this.x, this.y, this.radious,0, Math.PI*2,true)
        this.ctx.fill();
    }
}


const pong = new Pong(document.getElementById('pong'), 640, 480);
pong.start();
