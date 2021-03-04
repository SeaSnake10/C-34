class Rock{
    constructor(x, y, w, h){
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, w, h, options)
        this.w = w;
        this.h = h;
        this.image = loadImage("images/rock1.png");
        World.add(world, this.body);
    }
    show(){
        var pos = this.body.position;
        imageMode(CENTER);
        fill(0);
        stroke("grey");
        image(this.image, pos.x, pos.y, this.w, this.h);
    }
}