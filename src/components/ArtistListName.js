import React from "react";
import Link from "@material-ui/core/Link";
// import styles from "../List.css";

import { Image, List } from "semantic-ui-react";

export default function ArtistListName(props) {
  return (
    <Link onClick={() => props.handleSelectedArtistChange(props.artist)}>
      <List.Item className="listItem">
        <List.Content className="color">
          <Image avatar src={props.artist.profile_picture} />
          {props.artist.username}
        </List.Content>
        <hr></hr>
      </List.Item>
    </Link>
  );
}
