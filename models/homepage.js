"use strict";
module.exports = (sequelize, DataTypes) => {
  const homePage = sequelize.define(
    "homePage",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Title is required.",
          },
        },
      },
      description: DataTypes.TEXT,
      backgroundColor: { type: DataTypes.STRING, defaultValue: "#ffffff" },
      color: { type: DataTypes.STRING, defaultValue: "#000000" },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    },
    {}
  );
  homePage.associate = function (models) {
    homePage.belongsTo(models.user);
    homePage.hasMany(models.storyPage);
  };
  return homePage;
};
