var DataTypes = require("sequelize").DataTypes;
var _GAME_INFO = require("./GAME_INFO");
var _GAME_RATING = require("./GAME_RATING");
var _GAME_RECOMMEND = require("./GAME_RECOMMEND");
var _GAME_SUBGENRE = require("./GAME_SUBGENRE");
var _TYPE_INFO = require("./TYPE_INFO");
var _USER_DISLIKE = require("./USER_DISLIKE");
var _USER_INFO = require("./USER_INFO");

function initModels(sequelize) {
  var GAME_INFO = _GAME_INFO(sequelize, DataTypes);
  var GAME_RATING = _GAME_RATING(sequelize, DataTypes);
  var GAME_RECOMMEND = _GAME_RECOMMEND(sequelize, DataTypes);
  var GAME_SUBGENRE = _GAME_SUBGENRE(sequelize, DataTypes);
  var TYPE_INFO = _TYPE_INFO(sequelize, DataTypes);
  var USER_DISLIKE = _USER_DISLIKE(sequelize, DataTypes);
  var USER_INFO = _USER_INFO(sequelize, DataTypes);

  GAME_INFO.belongsToMany(USER_INFO, { as: 'user_id_USER_INFOs', through: GAME_RATING, foreignKey: "appId", otherKey: "user_id" });
  GAME_INFO.belongsToMany(USER_INFO, { as: 'user_id_USER_INFO_GAME_RECOMMENDs', through: GAME_RECOMMEND, foreignKey: "appId", otherKey: "user_id" });
  USER_INFO.belongsToMany(GAME_INFO, { as: 'appId_GAME_INFOs', through: GAME_RATING, foreignKey: "user_id", otherKey: "appId" });
  USER_INFO.belongsToMany(GAME_INFO, { as: 'appId_GAME_INFO_GAME_RECOMMENDs', through: GAME_RECOMMEND, foreignKey: "user_id", otherKey: "appId" });
  GAME_RATING.belongsTo(GAME_INFO, { as: "app", foreignKey: "appId"});
  GAME_INFO.hasMany(GAME_RATING, { as: "GAME_RATINGs", foreignKey: "appId"});
  GAME_RECOMMEND.belongsTo(GAME_INFO, { as: "app", foreignKey: "appId"});
  GAME_INFO.hasMany(GAME_RECOMMEND, { as: "GAME_RECOMMENDs", foreignKey: "appId"});
  GAME_SUBGENRE.belongsTo(GAME_INFO, { as: "app", foreignKey: "appId"});
  GAME_INFO.hasMany(GAME_SUBGENRE, { as: "GAME_SUBGENREs", foreignKey: "appId"});
  GAME_RATING.belongsTo(USER_INFO, { as: "user", foreignKey: "user_id"});
  USER_INFO.hasMany(GAME_RATING, { as: "GAME_RATINGs", foreignKey: "user_id"});
  GAME_RECOMMEND.belongsTo(USER_INFO, { as: "user", foreignKey: "user_id"});
  USER_INFO.hasMany(GAME_RECOMMEND, { as: "GAME_RECOMMENDs", foreignKey: "user_id"});
  USER_DISLIKE.belongsTo(USER_INFO, { as: "user", foreignKey: "user_id"});
  USER_INFO.hasMany(USER_DISLIKE, { as: "USER_DISLIKEs", foreignKey: "user_id"});

  return {
    GAME_INFO,
    GAME_RATING,
    GAME_RECOMMEND,
    GAME_SUBGENRE,
    TYPE_INFO,
    USER_DISLIKE,
    USER_INFO,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
