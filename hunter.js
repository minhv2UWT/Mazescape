class Hunter {
    constructor(game, x, y, characterNumber) {
        Object.assign(this, { game, x, y });
        this.startingPointX = x;
        this.startingPointY = y;
        const characterTypes = ["Hunter"];
        this.characterType = characterTypes[characterNumber];
        this.isDead = false;
        this.width = 100;
        this.height = 100;
        this.speed = 2; 
        this.moveDistance = 100; 
        this.game.isHunterMoving = false; 
        this.targetX = x;
        this.targetY = y;
        this.removeFromWorld = false;
        this.BB = new BoundingBox(this.x, this.y, this.width, this.height);
        this.assets = {
            HunterIdle: ASSET_MANAGER.getAsset("./sprites/hunterghost.png"),
            HunterAttack: ASSET_MANAGER.getAsset("./sprites/hunterghost.png"),
            Hunter: ASSET_MANAGER.getAsset("./sprites/hunterghost.png"),
        };

        this.moves = {
            up: true,
            down: true,
            left: true,
            right: true,
        };

        this.sprite = this.assets;
        this.animators = {
            idle: new Animator(this.assets.HunterIdle, 0, 0, this.width, this.height, 1, 0.3),
            walking: new Animator(this.assets.Hunter, 0, 0, this.width, this.height, 1, 0.1),
            attacking: new Animator(this.assets.HunterAttack, 0, 0, this.width, this.height, 1, 0.1),
        };

        this.currentAnimator = this.animators.idle;

        this.updateEdgePoints();
    }

    updateBoundingBox() {
        this.BB.x = this.x;
        this.BB.y = this.y;
    }
    update() {
        // this.game.turnNumber = 0;
        // return;
        if((this.game.turnNumber == 0 && !this.game.isHunterMoving) || this.game.isMoving) return;
        this.handleMovementInput();
        this.updatePosition();
        this.handleCollisions();
        this.updateEdgePoints();
        this.updateBoundingBox() 
    }

    handleMovementInput() {
        if (this.game.isHunterMoving) return;

        const player = this.game.entities.find(e => e instanceof Player);
        if (!player) return;

        const currentDx = player.x - this.x;
        const currentDy = player.y - this.y;
        const currentXDist = Math.abs(currentDx);
        const currentYDist = Math.abs(currentDy);
    
        const validMoves = [];
    
        if (this.moves.left) {
            const newXDist = Math.abs(currentDx + this.moveDistance);
            const newYDist = Math.abs(currentDy);
            if (newXDist <= currentXDist && newYDist <= currentYDist) {
                validMoves.push({dir: 'left', score: newXDist + newYDist});
            }
        }
   
        if (this.moves.right) {
            const newXDist = Math.abs(currentDx - this.moveDistance);
            const newYDist = Math.abs(currentDy);
            if (newXDist <= currentXDist && newYDist <= currentYDist) {
                validMoves.push({dir: 'right', score: newXDist + newYDist});
            }
        }
    
        if (this.moves.up) {
            const newYDist = Math.abs(currentDy + this.moveDistance);
            const newXDist = Math.abs(currentDx);
            if (newXDist <= currentXDist && newYDist <= currentYDist) {
                validMoves.push({dir: 'up', score: newXDist + newYDist});
            }
        }
    
        if (this.moves.down) {
            const newYDist = Math.abs(currentDy - this.moveDistance);
            const newXDist = Math.abs(currentDx);
            if (newXDist <= currentXDist && newYDist <= currentYDist) {
                validMoves.push({dir: 'down', score: newXDist + newYDist});
            }
        }
    
        let bestMove = null;
        let minScore = Infinity;
        
        validMoves.forEach(move => {
            if (move.score < minScore) {
                minScore = move.score;
                bestMove = move.dir;
            }
        });
    
        if (bestMove) {
            switch(bestMove) {
                case 'left':
                    this.targetX -= this.moveDistance;
                    this.facingLeft = true;
                    break;
                case 'right':
                    this.targetX += this.moveDistance;
                    this.facingLeft = false;
                    break;
                case 'up':
                    this.targetY -= this.moveDistance;
                    break;
                case 'down':
                    this.targetY += this.moveDistance;
                    break;
            }
            this.game.isHunterMoving = true;
            this.currentAnimator = this.animators.walking;
        }
        this.game.turnNumber--;
    }

    updatePosition() {
        if (!this.game.isHunterMoving) return;

        const deltaX = this.targetX - this.x;
        const deltaY = this.targetY - this.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance < this.speed) {

            this.x = this.targetX;
            this.y = this.targetY;
            this.game.isHunterMoving = false;
            this.currentAnimator = this.animators.idle;
        } else {
 
            this.x += (deltaX / distance) * this.speed;
            this.y += (deltaY / distance) * this.speed;
        }
    }
    handleCollisions() {
        let canMoveLeft = true;
        let canMoveRight = true;
        let canMoveUp = true;
        let canMoveDown = true;

        for (let entity of this.game.entities) {
            if (entity instanceof Wall) {
                let box = entity.boundingBox;

                if (this.leftPoint.x >= box.left && this.leftPoint.x <= box.right &&
                    this.leftPoint.y >= box.top && this.leftPoint.y <= box.bottom) {
                    canMoveLeft = false;
                }

                if (this.rightPoint.x >= box.left && this.rightPoint.x <= box.right &&
                    this.rightPoint.y >= box.top && this.rightPoint.y <= box.bottom) {
                    canMoveRight = false;
                }

                if (this.topPoint.x >= box.left && this.topPoint.x <= box.right &&
                    this.topPoint.y >= box.top && this.topPoint.y <= box.bottom) {
                    canMoveUp = false;
                }

                if (this.bottomPoint.x >= box.left && this.bottomPoint.x <= box.right &&
                    this.bottomPoint.y >= box.top && this.bottomPoint.y <= box.bottom) {
                    canMoveDown = false;
                }
            }

        }

        this.moves.left = canMoveLeft;
        this.moves.right = canMoveRight;
        this.moves.up = canMoveUp;
        this.moves.down = canMoveDown;
    }

    updateEdgePoints() {
        this.leftPoint = { x: this.x, y: this.y + this.height / 2 }; 
        this.rightPoint = { x: this.x + this.width, y: this.y + this.height / 2 }; 
        this.topPoint = { x: this.x + this.width / 2, y: this.y }; 
        this.bottomPoint = { x: this.x + this.width / 2, y: this.y + this.height };
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

    }
}