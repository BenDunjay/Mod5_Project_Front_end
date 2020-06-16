import React from "react";
import ArtistListName from "./ArtistListName";

import { List } from "semantic-ui-react";

export default function ArtistList(props) {
  const showAllArtists = () => {
    return props.allArtists.map((artist) => (
      <List>
        <ArtistListName
          artist={artist}
          key={artist.id}
          handleSelectedArtistChange={props.handleSelectedArtistChange}
        />
      </List>
    ));
  };

  return <div>{showAllArtists()}</div>;
}
