import { API_KEY, endpoint, country } from "./config";

export const services = async (category = "general", country="us") => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  let articles = await fetch(
    `${endpoint}?access_key=${API_KEY}&categories=${category}&countries=${country}`,
    requestOptions
  );

  let result = await articles.json();
  articles = null;

  return result.data;
};
