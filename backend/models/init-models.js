var DataTypes = require("sequelize").DataTypes;
var _GAME_INFO = require("./GAME_INFO");

function initModels(sequelize) {
  var GAME_INFO = _GAME_INFO(sequelize, DataTypes);


  return {
    GAME_INFO,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
