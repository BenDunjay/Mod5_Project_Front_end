import React from "react";
import { Link } from "react-router-dom";

import { Card, Image } from "semantic-ui-react";

import "../css/ArtistShown.css";

export default function ArtistShown(props) {
  return (
    <Card className="artist-shown-card">
      <Image src={props.artist.profile_picture} wrapped ui={false} />
      <Card.Content className="artist-card-content">
        {/* <h3>This is {props.artist.name}'s profile Page </h3> */}
        <Card.Header className="artist-card-content">
          {props.artist.username}
        </Card.Header>
        <Card.Meta className="artist-card-content">
          <span>{props.artist.name}</span>
        </Card.Meta>
        <Card.Meta className="artist-card-content">
          {" "}
          {props.artist.artist_genre}
        </Card.Meta>
        <Card.Description className="artist-card-content">
          {" "}
          {props.artist.bio}
        </Card.Description>
        <button className="artist-card-content-button">
          <Link
            to={`/artist_profile/${props.artist.name}`}
            className="artist-card-content"
          >
            Artist Profile
          </Link>
        </button>
      </Card.Content>
    </Card>
  );
}
