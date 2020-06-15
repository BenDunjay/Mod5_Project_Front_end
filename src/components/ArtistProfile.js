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
          <img src={SpotifyLogo} alt="Spotify link" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={Instagram} alt="Instagram Link" />
        </a>
        <hr></hr>
      </div>
    </div>
  );
}
