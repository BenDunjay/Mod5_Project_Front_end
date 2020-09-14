import React from "react";
import ArtistListName from "./ArtistListName";

import { List } from "semantic-ui-react";

export default function ArtistList(props) {
  // will take all artists and loop through them to display them in the left hand column

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
