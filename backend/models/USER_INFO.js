const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USER_INFO', {
    user_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user_ip: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    user_browser: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    type_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'USER_INFO',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
