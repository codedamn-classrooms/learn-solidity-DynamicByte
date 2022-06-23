const Migrations = artifacts.require("DynamicArray");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
