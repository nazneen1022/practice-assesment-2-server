"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "storyPages",
      [
        {
          name: "What is to be a good daughter?",
          content: `Parents give life to us, they sacrifice their happiness and life to make children's dream come true. 
            The important qualities of a good son and daughter are love and affection, respect, communication and trust each other. 
            Whereas, there are many differences from generation to generation and also culture`,
          imageUrl:
            "https://ideas.staticsfly.com/ideas/wp-content/uploads/2018/10/dad-and-daughter-images-with-quotes.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: 4,
        },
        {
          name: "How I became a Programmer?",
          content: `Well I'm, made an effort to develop applications on your own as they will help me learn a lot more and gain the experience and skills that can help me to become a competent programmer`,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHYnEvX5U8x0Bzi1rAO1xTmpP-n-8s7qpr7BG2rQYZU-mtR4Cf&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: 2,
        },

        {
          name: "Born and raised in Philly",
          content: `Being Philly born and raised I can testify that their cheesesteaks are the best ever eaten outside of Philly and better than a lot eaten in my 28 years there! Quality staff, well trained and courteous. They got it down, authentic taste and texture`,
          imageUrl:
            "https://images.unsplash.com/photo-1551031035-f51022c37481?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: 1,
        },
        {
          name: "Travelling to love of Paris",
          content: `It was dark in the evening, Christmas lights illuminating the whole city. It was bright, almost like daytime. 
          The streets were very busy, full of shoppers marching from one shop to another. I was fascinated seeing The Palais Garnier, which is the Paris Opera House. 
          I parked my car in a small one way street nearby. When we reached the main road, there was an underground station with a big, lit-up sign displaying the word ‘Métropolitain’. 
          I did not make note of the road name, as I thought that the name of the station would be sufficient for finding my car again. 
          We visited the Opera house and walked towards Place de la Concorde. We then walked back to find our car. 
          I located what looked like exactly the same ‘Métropolitain’ sign that I had noted in my head, but it was not the right street.`,
          imageUrl:
            "https://www.lifebeyondtourism.org/wp-content/uploads/2017/09/paris-4353082_960_720.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: 3,
        },
        {
          name:
            "What I Learned by Transitioning from Backend to Frontend Development?",
          content: `In back-end, what you worry mostly were your data structures, database structure and performance, code architecture, services, and building robust APIs that developers can understand for consuming them in Front-End.
          In Front-End it’s very different. You need to care about the User-Interface and how your users interact with your app then measure User-Experience quantitatively. There are times you need to design the User-Experience yourself and improve the flow of the app that you’re making.
          What I like about Front-End development is you directly tackle customer needs and care about User Experience they’re experiencing. So I would say the approach in Front-End is quite different because it’s customer-centric and it’s all about how you would make the customer comfortable in using the app that you’re working on than say, tackling data structures.`,
          imageUrl:
            "https://i.pinimg.com/originals/1d/b4/f1/1db4f10a61e3a0d27f0b064b672d546a.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: 2,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("storyPages", null, {});
  },
};
