import React from "react";
import Calendar from "./Calendar";

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
      </div>
    </div>
  );
}
