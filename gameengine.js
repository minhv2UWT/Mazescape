// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class GameEngine {
    constructor(options) {
        // What you will use to draw
        // Documentation: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
        this.ctx = null;

        // Everything that will be updated and drawn each frame
        this.entities = [];

        // Information on the input
        this.click = null;
        this.mouse = null;
        this.wheel = null;
        this.keys = {};

        // Options and the Details
        this.options = options || {
            debugging: false,
        };
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.isMoving = false;
        this.isHunterMoving = false;
        this.turnNumber = 0;
        this.skip = false;
        this.backgroundImage = null;
        this.currentStage = null;
    };

    init(ctx) {
        this.ctx = ctx;
        this.startInput();
        this.timer = new Timer();
    };

    start() {
        this.running = true;
        const gameLoop = () => {
            this.loop();
            requestAnimFrame(gameLoop, this.ctx.canvas);
        };
        gameLoop();
    };

    startInput() {
        var that = this;
        this.ctx.canvas.addEventListener('keydown',function(e){
            switch(e.code) {
                case "ArrowLeft":
                    that.left = true;
                    break;
                case "ArrowRight":
                    that.right = true;
                    break;
                case "ArrowUp":
                    that.up = true;
                    break;
                case "ArrowDown":
                    that.down = true;
                    break;
                case "Space":
                    that.skip = true;
                    break;
                case "ShiftLeft":
                    break;
                case "KeyD":
                    break;
                case "KeyS":
                    break;
            }

        }, false);
        this.ctx.canvas.addEventListener('keyup',function(e){
            switch(e.code) {
                case "ArrowLeft":
                    that.left = false;
                    break;
                case "ArrowRight":
                    that.right = false;
                    break;
                case "ArrowUp":
                    that.up = false;
                    break;
                case "ArrowDown":
                    that.down = false;
                    break;
                case "Space":
                    that.skip = false;
                    break;
                case "ShiftLeft":
                    break;
                case "KeyD":
                    break;
                case "KeyS":
                    break;    
            }

        }, false);
        const getXandY = e => ({
            x: e.clientX - this.ctx.canvas.getBoundingClientRect().left,
            y: e.clientY - this.ctx.canvas.getBoundingClientRect().top
        });
        
        this.ctx.canvas.addEventListener("mousemove", e => {
            if (this.options.debugging) {
                console.log("MOUSE_MOVE", getXandY(e));
            }
            this.mouse = getXandY(e);
        });

        this.ctx.canvas.addEventListener("click", e => {
            if (this.options.debugging) {
                console.log("CLICK", getXandY(e));
            }
            this.click = getXandY(e);
        });

        this.ctx.canvas.addEventListener("wheel", e => {
            if (this.options.debugging) {
                console.log("WHEEL", getXandY(e), e.wheelDelta);
            }
            e.preventDefault(); // Prevent Scrolling
            this.wheel = e;
        });

        this.ctx.canvas.addEventListener("contextmenu", e => {
            if (this.options.debugging) {
                console.log("RIGHT_CLICK", getXandY(e));
            }
            e.preventDefault(); // Prevent Context Menu
            this.rightclick = getXandY(e);
        });

        this.ctx.canvas.addEventListener("keydown", event => this.keys[event.key] = true);
        this.ctx.canvas.addEventListener("keyup", event => this.keys[event.key] = false);
    };

    addEntity(entity) {
        this.entities.push(entity);
    };

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        if (this.backgroundImage) {
            this.ctx.drawImage(this.backgroundImage, 0, 200, 600, 600);
        }

        for (let i = this.entities.length - 1; i >= 0; i--) {
            this.entities[i].draw(this.ctx, this);
        }
        this.camera.draw(this.ctx);
    }
    update() {
        let entitiesCount = this.entities.length;
        if(this.entities) {
            for (let i = 0; i < entitiesCount; i++) {
                let entity = this.entities[i];
                
    
                if (entity && !entity.removeFromWorld) {
                    entity.update();
                }
            }
            for (let i = this.entities.length - 1; i >= 0; --i) {
                if (this.entities[i].removeFromWorld) {
                    this.entities.splice(i, 1);
                }
            }
        }
        

        
    };

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    };

};