// questionsService.js
const connection = require("./database");

const getQuestions = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM quiz_questions";
    connection.query(query, (error, results) => {
      if (error) {
        return reject(error);
      }

      resolve(results);
    });
  });
};

module.exports = {
  getQuestions,
};
