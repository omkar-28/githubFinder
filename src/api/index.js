import axios from "axios";

let clientId, clientSecret;
if (process.env.NODE_ENV !== "production") {
  clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  clientId = process.env.GITHUB_CLIENT_ID;
  clientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const url = `https://api.github.com/users?client_id=${clientId}&client_secret=${clientSecret}`;

export const fetchedUser = async (user) => {
  let urlApi = url;
  if (user) {
    urlApi = `https://api.github.com/search/users?q=${user}&client_id=${clientId}&client_secret=${clientSecret}`;
  }
  try {
    const { data } = await axios.get(urlApi);

    return data.items ? data.items : data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserDetails = async (login) => {
  try {
    const urlApi = `https://api.github.com/users/${login}?client_id=${clientId}&client_secret=${clientSecret}`;

    const { data } = await axios.get(urlApi);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchRepos = async (login) => {
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=100&client_id=${clientId}&client_secret=${clientSecret}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchedUser;
