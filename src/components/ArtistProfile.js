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
      <span>
        <img
          src={artist.profile_picture}
          alt="Artist Profile"
          className="artist-profile-image"
        />
        {/* <h2>{artist.name}</h2> */}
        <h3 className="artist-name">
          <strong>{artist.name}</strong>
        </h3>
        <p className="artist-genre"> {artist.artist_genre}</p>
        <p className="artist-bio"> {artist.bio}</p>
        <p>
          {" "}
          <strong>
            {artist.phone_number} <p> {artist.email_address}</p>
          </strong>
        </p>
      </span>
      <Calendar artistDates={availableArtistDates()} artist={artist} />
      <hr></hr>
      <p>
        <a href="https://open.spotify.com/user/tigiras?si=yy15Im-RQiiJUk2TQTzROA">
          <Icon name="spotify" alt="Spotify link"></Icon>
        </a>
        <a href="https://www.instagram.com/">
          <Icon name="instagram" alt="instagram link"></Icon>
        </a>
      </p>
    </div>
  );
}
