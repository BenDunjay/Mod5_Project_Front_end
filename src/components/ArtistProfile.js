import React from "react";
import Calendar from "./Calendar";
import SpotifyLogo from "../Spotify.jpeg";
import Instagram from "../Instagram.png";

export default function ArtistProfile({ artist }) {
  const availableArtistDates = () => {
    return artist.availabilities.map((element) => element);
  };

  return (
    <div>
      {artist.name}
      <div>
        <Calendar artistDates={availableArtistDates()} artist={artist} />
        <hr></hr>
        <a href="https://open.spotify.com/user/tigiras?si=yy15Im-RQiiJUk2TQTzROA">
          <img src={SpotifyLogo} />
        </a>
        <a href="https://www.instagram.com/">
          <img src={Instagram} />
        </a>
        <hr></hr>
      </div>
    </div>
  );
}
