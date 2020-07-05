import React from "react";
import ArtistListName from "./ArtistListName";
import styles from "../List.css";

import { List } from "semantic-ui-react";

export default function ArtistList(props) {
  const showAllArtists = () => {
    return props.allArtists.map((artist) => (
      <List className="list">
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
