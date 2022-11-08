const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GAME_INFO', {
    appId: {
      type: DataTypes.STRING(300),
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    installs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    scoreText: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    reviews: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    free: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    currency: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    priceText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    icon: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    headerImage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contentRating: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    genreId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mainGenre: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GAME_INFO',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "appId" },
        ]
      },
    ]
  });
};
