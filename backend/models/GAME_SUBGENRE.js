const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GAME_SUBGENRE', {
    appId: {
      type: DataTypes.STRING(300),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'GAME_INFO',
        key: 'appId'
      }
    },
    subgenre_id: {
      type: DataTypes.STRING(300),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'GAME_SUBGENRE',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "appId" },
          { name: "subgenre_id" },
        ]
      },
    ]
  });
};
