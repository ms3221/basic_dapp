const Migrations = artifacts.require("SetName");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
