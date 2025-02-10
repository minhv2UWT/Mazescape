const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./sprites/warrior.png");
ASSET_MANAGER.downloadAll(() => {
	const gameEngine = new GameEngine();
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.init(ctx);
	new entitiesmanager(gameEngine, "marksman");
	gameEngine.start();
});
