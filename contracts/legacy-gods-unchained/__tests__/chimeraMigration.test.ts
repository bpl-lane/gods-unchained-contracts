// import { generatedWallets, Blockchain, expectRevert } from '@imtbl/test-utils';

// import { Address } from '@imtbl/common-types';
// import { ethers } from 'ethers';
// import {
//   CardIntegrationTwo,
//   ChimeraMigration,
//   CardIntegrationTwoFactory,
//   ChimeraMigrationFactory,
// } from '../src/contracts';
// import { Cards, CardsWrapper } from '@imtbl/gods-unchained';

// const provider = new ethers.providers.JsonRpcProvider();
// const blockchain = new Blockchain();

// describe('Core', () => {
//   const [ownerWallet, immutableWallet, userWallet] = generatedWallets(provider);
//   const BATCH_SIZE = 101;

//   beforeEach(async () => {
//     await blockchain.resetAsync();
//     await blockchain.saveSnapshotAsync();
//   });

//   afterEach(async () => {
//     await blockchain.revertAsync();
//   });

//   describe('#constructor', () => {
//     it('should be able to deploy the chimera contract', async () => {});
//   });

//   describe('#migrate', () => {
//     let chimeraMigration: ChimeraMigration;
//     let oldCards: CardIntegrationTwo;
//     let newCards: Cards;

//     beforeAll(async () => {
//       oldCards = await new CardIntegrationTwoFactory(ownerWallet);
//       chimeraMigration = await new ChimeraMigrationFactory(ownerWallet).deploy();
//     });

//     it('should not be able to migrate if it does not have ownership', async () => {});
//     it('should not be able to migrate if the token id is less than 580732');
//     it('should not be able to migrate the same card twice');
//     it('should be able to migrate the card with the correct proto');
//   });
// });