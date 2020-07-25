const AdvStorage = artifacts.require("AdvStorage");

module.exports = function(deployer) {
  deployer.deploy(AdvStorage);
};