import React from "react";

export default function ArtistListName(props) {
  return (
    <div>
      <button onClick={() => props.handleSelectedArtistChange(props.artist)}>
        {props.artist.name}
        {props.artist.id}
      </button>
    </div>
  );
}
