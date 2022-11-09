const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TYPE_INFO', {
    type_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    type_name: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    type_img: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    type_desc: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    type_sub_name: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    type_sub_desc: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TYPE_INFO',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "type_id" },
        ]
      },
    ]
  });
};
