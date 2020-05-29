"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "homePages",
      [
        {
          title: "Born and raised in Philly",
          description: "How I became the prince of Bel Air?",
          backgroundColor: "#FF0000", //red
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "How I became a Programmer?",
          description: "How I learned to stop worrying and love the typos?",
          backgroundColor: "#008000", //green
          color: "#FFFFFF",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
        },
        {
          title: "Travelling to love of Paris",
          description:
            "My first visit to Paris was a remarkable experience, which I will never forget.",
          backgroundColor: "#44028A",
          color: "#FFFFFF",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "What is to be a good daughter?",
          description:
            "The Good Daughter is like Law and Order meets The Good Wife.",
          backgroundColor: "#F5C512",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("homePages", null, {});
  },
};
