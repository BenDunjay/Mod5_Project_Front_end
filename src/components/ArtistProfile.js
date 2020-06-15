import React from "react";
import Calendar from "./Calendar";
import { Icon } from "semantic-ui-react";

export default function ArtistProfile({ artist }) {
  const availableArtistDates = () => {
    return artist.availabilities.map((element) => element);
  };

  return (
    <div>
      <img src={artist.profile_picture} />
      <h2>{artist.name}</h2>
      <h3>{artist.username}</h3>
      <p> {artist.email_address}</p>
      <p> {artist.artist_genre}</p>
      <p> {artist.bio}</p>
      <p> {artist.phone_number}</p>
      <div>
        <Calendar artistDates={availableArtistDates()} artist={artist} />
        <hr></hr>
        <a href="https://open.spotify.com/user/tigiras?si=yy15Im-RQiiJUk2TQTzROA">
          <Icon name="spotify" alt="Spotify link"></Icon>
        </a>
        <a href="https://www.instagram.com/">
          <Icon name="instagram" alt="instagram link"></Icon>
        </a>

        <hr></hr>
      </div>
    </div>
  );
}
