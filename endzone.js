class EndZone {
    constructor(x, y) {
        console.log("endzone");
        
        Object.assign(this, {x, y});
        this.width = 100;
        this.height = 100;
        this.BB = new BoundingBox(x, y, this.width, this.height);
        this.image = ASSET_MANAGER.getAsset("./sprites/hole.png"); 
        
    }
    draw(ctx) {

        if(this.image) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            ctx.fillStyle = "#025104";
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        
    }

    update() {}
}
