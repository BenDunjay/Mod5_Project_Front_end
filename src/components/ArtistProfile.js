import React from "react";
import Calendar from "./Calendar";

export default function ArtistProfile({ artist }) {
  const unavailableArtistDates = () => {
    return artist.availabilities.map((element) => element.date);
  };

  return (
    <div>
      {artist.name}
      <div>
        <Calendar artistDates={unavailableArtistDates()} />
        <hr></hr>
      </div>
    </div>
  );
}
