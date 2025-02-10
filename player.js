class Player {
    constructor(game, x, y, characterNumber) {
        Object.assign(this, { game, x, y });
        this.startingPointX = x;
        this.startingPointY = y;
        const characterTypes = ["Warrior"];
        this.characterType = characterTypes[characterNumber];
        this.isDead = false;
        this.width = 22;
        this.height = 41;
        this.speed = 3;
        
        this.assets = {
            WarriorIdle: ASSET_MANAGER.getAsset("./sprites/warrior.png"),
            WarriorAttack: ASSET_MANAGER.getAsset("./sprites/warrior.png"),
            Warrior: ASSET_MANAGER.getAsset("./sprites/warrior.png"),
        };

        this.sprite = this.assets;
        this.animators = {
                idle: new Animator(this.assets.WarriorIdle, 0, 0, this.width, this.height, 1, 0.3),
                walking: new Animator(this.assets.Warrior, 0, 0, 50, this.height, 1, 0.1),
                attacking: new Animator(this.assets.WarriorAttack, 0, 0, 45, this.height, 1, 0.1),
            
        };

        this.currentAnimator = this.animators.idle;
        this.BB = new BoundingBox(this.x, this.y, this.width, this.height);
    }

    die() {
        console.log("Player has been defeated!");
        this.isDead = true;
        this.totalKills = 0;
        this.removeFromWorld = true;
    }

    update() {
        if (this.isDead) return;
        this.handleMovement();
        this.handleCollisions();
        this.updateBoundingBox();

    }

    handleMovement() {

        if (this.game.left) {
            this.x -= this.speed;
            this.attackDirection = "left";
            this.currentAnimator = this.animators.walking;
            this.facingLeft = true;
        }
        if (this.game.right) {
            this.x += this.speed;
            this.attackDirection = "right";
            this.currentAnimator = this.animators.walking;
            this.facingLeft = false;
        }
        if (this.game.up) {
            this.y -= this.speed;
            this.attackDirection = "up";
            this.currentAnimator = this.animators.walking;
        }
        if (this.game.down) {
            this.y += this.speed;
            this.attackDirection = "up";
            this.currentAnimator = this.animators.walking;
        }
    }


    handleCollisions() {
        if (this.y + this.height > this.game.ctx.canvas.height) {
            this.y = this.game.ctx.canvas.height - this.height;
            this.velocity = 0;
            this.isOnGround = true;
        }
        for (let entity of this.game.entities) {
            if (entity instanceof Platform && this.BB.collide(entity.boundingBox)) {
                if (this.velocity > 0 && (this.y + this.height) >= (entity.boundingBox.top + this.velocity)) {
                    this.y = entity.boundingBox.top - this.height;
                    this.velocity = 0;
                    this.isOnGround = true;
                }
            }
        }
    }


    checkObjectives(level) {
        this.levelO = level;
        if (this.totalKills >= this.levelO.objectives[0].pirates &&
            this.totalChests >= this.levelO.objectives[0].chests) {
            this.removechest();
            this.resetValues();
            console.log("Moving to next scene!");
            this.moveToNextScene();
        }
    }



    updateBoundingBox() {
        this.BB.x = this.x;
        this.BB.y = this.y;
    }

    draw(ctx) {
        ctx.imageSmoothingEnabled = false;

        if (this.facingLeft) {
            ctx.save();
            ctx.scale(-1, 1);
            ctx.translate(-this.x * 2 - this.width, 0);
        }
        this.currentAnimator.drawFrame(this.game.clockTick, ctx, this.x, this.y);

        if (this.facingLeft) {
            ctx.restore();
        }

        // Debug bounding box
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
    }
}
