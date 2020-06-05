const baseUrlArtist = "http://localhost:3000/api/v1";

const artistLoginUrl = baseUrlArtist + "/artist_login";
const artistSignUpUrl = baseUrlArtist + "/artists";
const updateArtistUrl = baseUrlArtist + "/edit_profile";
const createAvailabilityUrl = baseUrlArtist + "/create_availability";

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

const patch = (url, object) => {
  return fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token,
    },
    body: JSON.stringify(object),
  }).then((resp) => resp.json());
};

const postAPI = (url, object) => {
  console.log(object);
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token,
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

const updateArtist = (artist) => {
  return patch(updateArtistUrl, artist);
};

const createAvailability = (date) => {
  return postAPI(createAvailabilityUrl, date);
};

export default { signupArtist, loginArtist, updateArtist, createAvailability };
