import React from "react";
import Link from "@material-ui/core/Link";

import { Image, List } from "semantic-ui-react";

export default function ArtistListName(props) {
  return (
    <Link onClick={() => props.handleSelectedArtistChange(props.artist)}>
      <List.Item>
        <List.Content>
          <Image avatar src={props.artist.profile_picture} />
          {props.artist.username}
        </List.Content>
      </List.Item>
    </Link>
  );
}
