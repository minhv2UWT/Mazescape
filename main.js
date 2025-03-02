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
