const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GAME_RATING', {
    appId: {
      type: DataTypes.STRING(300),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'GAME_INFO',
        key: 'appId'
      }
    },
    user_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'USER_INFO',
        key: 'user_id'
      }
    },
    game_score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rate_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GAME_RATING',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "appId" },
          { name: "user_id" },
        ]
      },
      {
        name: "FK_USER_INFO_TO_GAME_RATING_1",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
