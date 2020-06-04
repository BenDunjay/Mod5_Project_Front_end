const baseUrlArtist = "http://localhost:3000/api/v1";

const artistLoginUrl = baseUrlArtist + "/artist_login";
const artistSignUpUrl = baseUrlArtist + "/artists";

const post = (url, object) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(object),
  }).then((response) => response.json());
};

const signupArtist = (artist) => {
  return post(artistSignUpUrl, { artist });
};

const loginArtist = (artist) => {
  return post(artistLoginUrl, { artist });
};

export default { signupArtist, loginArtist };
