class entitiesmanager {
    constructor(game) {

        this.game = game;
        this.level = null; 
        this.game.camera = this;
        this.startingPointX = 300;
        this.startingPointY = 500;
        this.hunterStartingPointX = 0;
        this.hunterstartingPointY = 400;
        this.game.currentStage = 1;
    }

    loadLevel(level) {
        this.level = level;
        this.game.entities = [];
        if (this.game.currentStage === 0) {
            return;
        }

        if (level.walls) {
            for (let i = 0; i < level.walls.length; i++) {
                let wall = level.walls[i];
                this.game.addEntity(new Wall(wall.x, wall.y, wall.width, wall.height, 1));
            }
        }

        if (level.endZones) {
            for (let i = 0; i < level.endZones.length; i++) {
                let endZone = level.endZones[i];
                this.game.addEntity(new EndZone(endZone.x, endZone.y));
            }
        }

        this.player = new Player(this.game, this.level.playerPos.x, this.level.playerPos.y);
        this.hunter = new Hunter(this.game, this.level.hunterPos.x, this.level.hunterPos.y);
        this.game.addEntity(this.player);
        this.game.addEntity(this.hunter);
    }

    update() {

    }

    draw(ctx) {

        if (this.game.currentStage === 0) {
            this.displayVictoryMessage(ctx);
        }
        if (this.game.currentStage === -1) {
            this.displayLoseMessage(ctx);
        }
    }

    displayVictoryMessage(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "black";
        ctx.font = "48px Arial";
        ctx.textAlign = "center";
        ctx.fillText("You Won!", ctx.canvas.width / 2, ctx.canvas.height / 2);
    }
    displayLoseMessage(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "black";
        ctx.font = "48px Arial";
        ctx.textAlign = "center";
        ctx.fillText("You Lose!", ctx.canvas.width / 2, ctx.canvas.height / 2);
    }
}