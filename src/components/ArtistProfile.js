import React from "react";
import Calendar from "./Calendar";

export default function ArtistProfile(props) {
  return (
    <div>
      {props.artist.name}
      <div>
        <Calendar />
      </div>
    </div>
  );
}
