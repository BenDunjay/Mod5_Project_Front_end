const baseUrl = "http://localhost:3000/api/v1";

const artistLoginUrl = baseUrl + "/artist_login";
const artistSignUpUrl = baseUrl + "/artists";
const updateArtistUrl = baseUrl + "/edit_profile";
const createAvailabilityUrl = baseUrl + "/create_availability";
const venueLoginUrl = baseUrl + "/venue_login";
const allArtistsUrl = baseUrl + "/all_artists";
const findArtistUrl = baseUrl + "/profile/";
const availabilityForRequestUrl = baseUrl + "/get_availability/";
const createRequestUrl = baseUrl + "/create_request";
const changeRequestStatusUrl = baseUrl + "/accept_or_reject/";
const getAllBookingsUrl = baseUrl + "/all_bookings";
const deleteBookingUrl = baseUrl + "/availabilities/";

const get = (url) => {
  return fetch(url, {
    headers: { Authorization: localStorage.token },
  }).then((resp) => resp.json());
};

const getAvailability = (url, id) => {
  return fetch(url + id).then((resp) => resp.json());
};

const getArtist = (url, name) => {
  return fetch(url + name, {
    headers: { Authorization: localStorage.token },
  }).then((resp) => resp.json());
};

const postAPI = (url, object) => {
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

const destroy = (url, id) => {
  return fetch(url + id, {
    method: "DELETE",
    headers: { Authorization: localStorage.token },
  });
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

const patchRequest = (url, object, booleanValue) => {
  return fetch(url + object.id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token,
    },
    body: JSON.stringify({ accept: booleanValue }),
  }).then((resp) => resp.json());
};

const deleteAvailability = (id) => {
  return destroy(deleteBookingUrl, id);
};

const signupArtist = (artist) => {
  return postAPI(artistSignUpUrl, { artist });
};

const createRequest = (id) => {
  return getAvailability(availabilityForRequestUrl, id);
};

const loginArtist = (artist) => {
  return postAPI(artistLoginUrl, { artist });
};

const updateArtist = (artist) => {
  return patch(updateArtistUrl, artist);
};

const loginVenue = (venue) => {
  return postAPI(venueLoginUrl, { venue });
};

const createAvailability = (date) => {
  return postAPI(createAvailabilityUrl, date);
};

const getAllArtists = () => {
  return get(allArtistsUrl);
};

const findClickedArtist = (artistName) => {
  return getArtist(findArtistUrl, artistName);
};

const sendARequest = (requestObject) => {
  return postAPI(createRequestUrl, requestObject);
};

const acceptOrReject = (requestObject, booleanValue) => {
  return patchRequest(changeRequestStatusUrl, requestObject, booleanValue);
};

const fetchBookings = () => {
  return get(getAllBookingsUrl);
};

export default {
  signupArtist,
  loginArtist,
  updateArtist,
  createAvailability,
  loginVenue,
  getAllArtists,
  findClickedArtist,
  createRequest,
  sendARequest,
  acceptOrReject,
  fetchBookings,
  deleteAvailability,
};
