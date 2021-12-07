import axios from "axios";

const getRecentTweets = () => {
  return axios
    .get(`http://localhost:4000/api/recent`)
    .then((response) => response.data)
    .catch((error) => console.log("Error:", error.message));
};

const getSearchTweets = (searchText) => {
  return axios
    .get(`http://localhost:4000/api/searchtweets?query=${searchText}`)
    .then((response) => response.data)
    .catch((error) => console.log("Error:", error.message));
};

export { getSearchTweets, getRecentTweets };
