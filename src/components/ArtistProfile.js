import React from "react";
import Calendar from "./Calendar";
import { Icon } from "semantic-ui-react";

import "../css/ArtistProfile.css";

export default function ArtistProfile({ artist }) {
  // will map through and return each date object for the artist.
  const availableArtistDates = () => {
    return artist.availabilities.map((element) => element);
  };

  return (
    <div className="artist-profile-div">
      <span className="artist-image-about-section">
        <img
          src={artist.profile_picture}
          alt="Artist Profile"
          className="artist-profile-image"
        />
        {/* <h2>{artist.name}</h2> */}
        <span className="about-artist-section">
          <h2> {artist.username}</h2>
          <h3 className="artist-genre"> {artist.artist_genre}</h3>
          <p className="artist-bio"> {artist.bio}</p>
          <h5 className="artist-name">
            Contact: <strong>{artist.name}</strong>
          </h5>
          <p className="artist-contact-details">
            {" "}
            <strong>
              Mob: {artist.phone_number} <p> Email: {artist.email_address}</p>
            </strong>
          </p>
          <p>
            <a href="https://open.spotify.com/user/tigiras?si=yy15Im-RQiiJUk2TQTzROA">
              <Icon
                name="spotify"
                alt="Spotify link"
                className="artist-icons"
              ></Icon>
            </a>
            <a href="https://www.instagram.com/">
              <Icon
                name="instagram"
                alt="instagram link"
                className="artist-icons"
              ></Icon>
            </a>
          </p>
        </span>
      </span>
      <Calendar artistDates={availableArtistDates()} artist={artist} />
      <hr></hr>
    </div>
  );
}
