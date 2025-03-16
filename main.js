const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./sprites/ground.png");
ASSET_MANAGER.queueDownload("./sprites/hole.png");
ASSET_MANAGER.queueDownload("./sprites/hunterghost.png");
ASSET_MANAGER.queueDownload("./sprites/prey.png");
ASSET_MANAGER.queueDownload("./sprites/wall.png");
ASSET_MANAGER.queueDownload("./sprites/tallGrass.png");
ASSET_MANAGER.downloadAll(() => {
	const gameEngine = new GameEngine();
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.init(ctx);
	new entitiesmanager(gameEngine, "warrior");
	gameEngine.backgroundImage = ASSET_MANAGER.getAsset("./sprites/ground.png");
	gameEngine.start();
});
function loadStage(stageNumber) {
    // Hide the stage selection screen
    document.getElementById("stageSelect").style.display = "none";

    // Show the game canvas
    document.getElementById("gameWorld").style.display = "block";

    // Load the selected level
    const gameEngine = new GameEngine();
    const canvas = document.getElementById("gameWorld");
    const ctx = canvas.getContext("2d");

    gameEngine.init(ctx);
    const entitiesManager = new entitiesmanager(gameEngine, "warrior");
    gameEngine.backgroundImage = ASSET_MANAGER.getAsset("./sprites/ground.png");

    // Load the appropriate level based on the stage number
    switch (stageNumber) {
        case 1:
            entitiesManager.loadLevel(level1);
            break;
        case 2:
            entitiesManager.loadLevel(level2);
            break;
        case 3:
            entitiesManager.loadLevel(level3);
            break;
        case 4:
            entitiesManager.loadLevel(level4);
            break;
        default:
            console.error("Invalid stage number");
            return;
    }

    gameEngine.start();
}