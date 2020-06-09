import React from "react";
import ArtistListName from "./ArtistListName";

export default function ArtistList(props) {
  const showAllArtists = () => {
    return props.allArtists.map((artist) => (
      <ul>
        <ArtistListName
          artist={artist}
          key={artist.id}
          handleSelectedArtistChange={props.handleSelectedArtistChange}
        />
      </ul>
    ));
  };

  return <div>{showAllArtists()}</div>;
}
