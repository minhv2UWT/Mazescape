class entitiesmanager {
    constructor(game, character) {
        this.character = character;
        this.game = game;
        this.level = null; 
        this.game.camera = this;
        this.startingPointX = 0;
        this.startingPointY = 655;
        if(this.character === "marksman") {
            this.player = new Marksman(this.game, this.startingPointX, this.startingPointY);
        } else {
            this.player = new Warrior(this.game, this.startingPointX, this.startingPointY);
        }
        this.loadLevel(level1Scene1);
    }

    loadLevel(level) {
        this.level = level;
        this.game.entities = [];

 

        this.game.addEntity(this.player);
    }

    update() {
 
    }

    draw(ctx) {
       
    }
}