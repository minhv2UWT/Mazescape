class entitiesmanager {
    constructor(game, character) {
        this.character = character;
        this.game = game;
        this.level = null; 
        this.game.camera = this;
        this.startingPointX = 300;
        this.startingPointY = 500;
        this.hunterStartingPointX = 0;
        this.hunterstartingPointY = 400;
        this.game.currentStage = 1;
        


        this.loadLevel(level1);
    }

    loadLevel(level) {
        this.level = level;
         this.game.entities = [];
        if (level.walls) {
            for (let i = 0; i < level.walls.length; i++) {
                let wall = level.walls[i];
                this.game.addEntity(new Wall(wall.x, wall.y, wall.width, wall.height,1));
            
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
       
    }
}