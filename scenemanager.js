class entitiesmanager {
    constructor(game, character) {
        this.character = character;
        this.game = game;
        this.level = null; 
        this.game.camera = this;
        this.startingPointX = 0;
        this.startingPointY = 600;
        this.player = new Player(this.game, this.startingPointX, this.startingPointY);



        this.loadLevel(level1Scene1);
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
        if (level.hunter) {
                let hunter = level.hunter[0];
                this.game.addEntity(new Hunter(this.game, hunter.x, hunter.y));
        }
        this.game.addEntity(this.player);
    }

    update() {
 
    }

    draw(ctx) {
       
    }
}