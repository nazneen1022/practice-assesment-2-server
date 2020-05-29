"use strict";
module.exports = (sequelize, DataTypes) => {
  const storyPage = sequelize.define(
    "storyPage",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "name is required.",
          },
        },
      },
      content: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
      homepageId: {
        type: DataTypes.INTEGER,
        references: {
          model: "homePages",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    },
    {}
  );
  storyPage.associate = function (models) {
    storyPage.belongsTo(models.homePage);
  };
  return storyPage;
};
