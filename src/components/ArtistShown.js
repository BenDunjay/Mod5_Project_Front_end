import React from "react";
import { Link } from "react-router-dom";

import { Card, Image } from "semantic-ui-react";

export default function ArtistShown(props) {
  return (
    <Card>
      <Image src={props.artist.profile_picture} wrapped ui={false} />
      <Card.Content>
        <h3>This is {props.artist.name}'s profile Page </h3>
        <Card.Header>{props.artist.username}</Card.Header>
        <Card.Meta>
          <span>{props.artist.name}</span>
        </Card.Meta>
        <Card.Meta> {props.artist.artist_genre}</Card.Meta>
        <Card.Description> {props.artist.bio}</Card.Description>
        <button>
          <Link to={`/artist_profile/${props.artist.name}`}>
            Artist Profile
          </Link>
        </button>
      </Card.Content>
    </Card>
  );
}
