import React from "react";
import ArtistListName from "./ArtistListName";
import styles from "../List.css";

import { List } from "semantic-ui-react";

export default function ArtistList(props) {
  console.log(props);
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
