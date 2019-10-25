const Cards = require('../build/Cards');
const OpenMinter = require('../build/OpenMinter');

const secrets = require('../secrets.json');

const DeployManager = require('../util/deploy-manager.js');

const deploy = async (network, secret, etherscanApiKey) => {

	const manager = new DeployManager(network, secrets.privateKey);

	deployer = manager.getDeployer();

	deployer.setVerifierApiKey(secrets.etherscanApiKey);

	BLOCK_SIZE = 1251;

	let cards = await deployer.deployAndVerify(Cards, {}, BLOCK_SIZE, "Gods Unchained Cards", "CARD");

	let minter = await deployer.deployAndVerify(OpenMinter, {}, cards.contractAddress);

	await cards.startSeason(0, 377);
	await cards.addFactory(minter.contractAddress, 0);
	await cards.unlockTrading(0);

};

module.exports = {
	deploy
};