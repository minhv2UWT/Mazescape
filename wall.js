class Wall {
    constructor(x, y, width, height, number) {
        this.boundingBox = new BoundingBox(x, y, width, height);
        Object.assign(this, { x, y, width, height });
            this.image = ASSET_MANAGER.getAsset("./sprites/wall.png"); 
        this.removeFromWorld = false;
        
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



