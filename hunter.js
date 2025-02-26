class Hunter {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.width = 50;
        this.height = 50;
        this.speed = 1;
        this.moveDistance = 50;
        this.isMoving = false;
        this.targetX = x;
        this.targetY = y;
        this.moves = { left: true, right: true, up: true, down: true };
        this.facingLeft = false;
        this.leftPoint = { x: this.x, y: this.y + this.height / 2 };
        this.rightPoint = { x: this.x + this.width, y: this.y + this.height / 2 };
        this.topPoint = { x: this.x + this.width / 2, y: this.y };
        this.bottomPoint = { x: this.x + this.width / 2, y: this.y + this.height };

        // Hunter's sprite and animators can be added here similar to the Player
        // For simplicity, a colored rectangle is used here
    }

    update() {
        if (this.game.isPlayerTurn || this.game.hunterRemainingMoves <= 0) return;
        if (this.isMoving) {
            this.updatePosition();
        } else {
            this.planNextMove();
        }
    }

    planNextMove() {
        const player = this.findPlayer();
        if (!player) return;

        this.handleCollisions();
        const dx = player.x - this.x;
        const dy = player.y - this.y;

        let moveDirection = this.determineDirection(dx, dy);

        if (moveDirection) {
            this.isMoving = true;
            this.game.hunterRemainingMoves--;
        }
    }

    determineDirection(dx, dy) {
        // Prioritize X-axis movement
        if (dx !== 0) {
            if (dx > 0 && this.moves.right) {
                this.targetX = this.x + this.moveDistance;
                this.facingLeft = false;
                return 'right';
            } else if (dx < 0 && this.moves.left) {
                this.targetX = this.x - this.moveDistance;
                this.facingLeft = true;
                return 'left';
            }
        }

        // Then Y-axis movement
        if (dy !== 0) {
            if (dy > 0 && this.moves.down) {
                this.targetY = this.y + this.moveDistance;
                return 'down';
            } else if (dy < 0 && this.moves.up) {
                this.targetY = this.y - this.moveDistance;
                return 'up';
            }
        }

        return null; // No possible move
    }

    updatePosition() {
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        const distance = Math.sqrt(dx ** 2 + dy ** 2);

        if (distance < this.speed) {
            this.x = this.targetX;
            this.y = this.targetY;
            this.isMoving = false;
        } else {
            this.x += (dx / distance) * this.speed;
            this.y += (dy / distance) * this.speed;
        }
    }

    findPlayer() {
        return this.game.entities.find(e => e instanceof Player && !e.isDead);
    }

    handleCollisions() {
        this.updateEdgePoints();
        let [canMoveLeft, canMoveRight, canMoveUp, canMoveDown] = [true, true, true, true];

        for (const entity of this.game.entities) {
            if (entity instanceof Wall) {
                const box = entity.boundingBox;
                canMoveLeft = canMoveLeft && !this.isPointInBox(this.leftPoint, box);
                canMoveRight = canMoveRight && !this.isPointInBox(this.rightPoint, box);
                canMoveUp = canMoveUp && !this.isPointInBox(this.topPoint, box);
                canMoveDown = canMoveDown && !this.isPointInBox(this.bottomPoint, box);
            }
        }

        this.moves.left = canMoveLeft;
        this.moves.right = canMoveRight;
        this.moves.up = canMoveUp;
        this.moves.down = canMoveDown;
    }

    isPointInBox(point, box) {
        return point.x >= box.left && point.x <= box.right &&
               point.y >= box.top && point.y <= box.bottom;
    }

    updateEdgePoints() {
        this.leftPoint = { x: this.x, y: this.y + this.height / 2 };
        this.rightPoint = { x: this.x + this.width, y: this.y + this.height / 2 };
        this.topPoint = { x: this.x + this.width / 2, y: this.y };
        this.bottomPoint = { x: this.x + this.width / 2, y: this.y + this.height };
    }

    draw(ctx) {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        // Debug points (optional)
        ctx.fillStyle = "red";
        ctx.fillRect(this.leftPoint.x, this.leftPoint.y, 3, 3);
        ctx.fillRect(this.rightPoint.x, this.rightPoint.y, 3, 3);
        ctx.fillRect(this.topPoint.x, this.topPoint.y, 3, 3);
        ctx.fillRect(this.bottomPoint.x, this.bottomPoint.y, 3, 3);
    }
}