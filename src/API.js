const baseUrl = "http://localhost:3000/api/v1";

const artistLoginUrl = baseUrl + "/artist_login";
const artistSignUpUrl = baseUrl + "/artists";
const updateArtistUrl = baseUrl + "/edit_profile";
const createAvailabilityUrl = baseUrl + "/create_availability";
const venueLoginUrl = baseUrl + "/venue_login";
const allArtistsUrl = baseUrl + "/all_artists";
const findArtistUrl = baseUrl + "/profile/";

const get = (url) => {
  return fetch(url).then((resp) => resp.json());
};

const getArtist = (url, name) => {
  return fetch(url + name, {
    headers: { Authorization: localStorage.token },
  }).then((resp) => resp.json());
};

const post = (url, object) => {
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

const loginVenue = (venue) => {
  return post(venueLoginUrl, { venue });
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

export default {
  signupArtist,
  loginArtist,
  updateArtist,
  createAvailability,
  loginVenue,
  getAllArtists,
  findClickedArtist,
};

// {
//   /* <App>
//   {this.state.user ? (
//     <MainContainer>
//       {this.props.isArtist ? <ArtistAppContainer /> : <VenueAppContainer />}
//     </MainContainer>
//   ) : (
//     <AuthContainer />
//   )}
// </App>; */
// }
