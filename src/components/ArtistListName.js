import React from "react";
import Link from "@material-ui/core/Link";
import { Image, List } from "semantic-ui-react";

export default function ArtistListName(props) {
  // will show the individual artist name and avatar for within the ArtistList

  return (
    <Link onClick={() => props.handleSelectedArtistChange(props.artist)}>
      <List.Item>
        <List.Content>
          <Image avatar src={props.artist.profile_picture} />
          {props.artist.username}
        </List.Content>
        <hr></hr>
      </List.Item>
    </Link>
  );
}
