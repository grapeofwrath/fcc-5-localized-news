const axios = require("axios");
require('dotenv').config()

module.exports = async function() {
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2021-04-07&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};