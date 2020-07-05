import axios from "axios";

const url = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

export const fetchedUser = async (user) => {
  let urlApi = url;
  if (user) {
    urlApi = `https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
  }
  try {
    const { data } = await axios.get(urlApi);
    console.log(data);
    return data.items ? data.items : data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserDetails = async (login) => {
  try {
    const urlApi = `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

    const { data } = await axios.get(urlApi);
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchedUser;
