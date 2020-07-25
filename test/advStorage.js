const AdvStorage = artifacts.require('AdvStorage');

contract('AdvStorage', () => {
	let advancedStorage = null;
	before(async () => {
		advancedStorage = await AdvStorage.deployed();
	});
	//first function
	it('Should add an element to ids array', async () => {
			//const advancedStorage  = await AdvancedStorage.deployed();
			await advancedStorage.add(10);
			const result = await advancedStorage.ids(0);
			assert(result.toNumber() === 10);
	});
	//get function

	it('Should get an element of the ids array', async () => {
			//const advancedStorage  = await AdvancedStorage.deployed();
			await advancedStorage.add(20);
			const result = await advancedStorage.gets(1);
			assert(result.toNumber() === 20);
	});

	//To get the whole ids array
	it('Should add an element to ids array', async () => {
			//const advancedStorage  = await AdvancedStorage.deployed();
			const rawIds = await advancedStorage.getAll();
			const ids = rawIds.map(id => id.toNumber());
			assert.deepEqual(ids, [10,20]);

	});

	//to test the length function
	it('Should add an element to ids array', async () => {
			//const advancedStorage = await AdvancedStorage.deployed();
		    const length = await advancedStorage.length();
		    assert(length.toNumber() === 2 );


	});


	
});