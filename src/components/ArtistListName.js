import React from "react";
import Link from "@material-ui/core/Link";
import { Image, List } from "semantic-ui-react";

import "../css/ArtistListName.css";

export default function ArtistListName(props) {
  // will show the individual artist name and avatar for within the ArtistList

  return (
    <Link
      onClick={() => props.handleSelectedArtistChange(props.artist)}
      className="artist-link"
    >
      <List.Item>
        <List.Content className="artist-list-name">
          <Image avatar src={props.artist.profile_picture} />
          {props.artist.username}
        </List.Content>
      </List.Item>
    </Link>
  );
}
