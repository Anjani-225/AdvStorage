var simpleStorageABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "data",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_data",
          "type": "string"
        }
      ],
      "name": "set",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];
var simpleStorageAddress = '0x0337B90e7d054207Ab495e53a3B06B4DB49Ac7e1';
var web3 = new Web3('http://localhost:9080');
var simpleStorage = new web3.eth.Contract(simpleStorageABI, simpleStorageAddress);
document.addEventListener('DOMContentLoaded', () => {
	const $setData = document.getElementById('setData');
	const $data = document.getElementById('data');
	let account = [];

	web3.eth.getAccounts()
	.then(_accounts => {
		accounts = _accounts;

	});
	
	const getData = () => {
		simpleStorage.methods
			.get()
			.call()
			.then(result => {
				$data.innerHTML = result;
		});
	};
	getData();

	$setData.addEventListener('submit', e => {
    e.preventDefault();
    const data = e.target.elements[0].value;
    simpleStorage.methods
      .set(data)
      .send({from: accounts[0]})
      .then(getData);
  });
});