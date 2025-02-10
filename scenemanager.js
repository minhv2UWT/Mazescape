class entitiesmanager {
    constructor(game, character) {
        this.character = character;
        this.game = game;
        this.level = null; 
        this.game.camera = this;
        this.startingPointX = 0;
        this.startingPointY = 655;
        this.player = new Player(this.game, this.startingPointX, this.startingPointY);



        this.loadLevel(level1Scene1);
    }

    loadLevel(level) {
        this.level = level;
        this.game.entities = [];
        if (level.ground) {
            for (let i = 0; i < level.ground.length; i++) {
                let ground = level.ground[i];
                this.game.addEntity(new Platform(ground.x, ground.y, ground.width, ground.height,1));
            
            }
        }
        this.game.addEntity(this.player);
    }

    update() {
 
    }

    draw(ctx) {
       
    }
}