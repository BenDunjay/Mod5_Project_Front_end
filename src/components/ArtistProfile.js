import React from "react";
import Calendar from "./Calendar";
import { Icon, Container, Divider, Card, Image } from "semantic-ui-react";

export default function ArtistProfile({ artist }) {
  const availableArtistDates = () => {
    return artist.availabilities.map((element) => element);
  };

  return (
    <Container style={container}>
      <Card style={color}>
        <Image src={artist.profile_picture} alt="Artist Profile" />
        {/* <h2>{artist.name}</h2> */}
        <h3 style={text}>
          <strong>{artist.name}</strong>
        </h3>
        <p style={text}> {artist.email_address}</p>
        <p style={text}> {artist.artist_genre}</p>
        <p style={text}> {artist.bio}</p>
        <p style={text}>
          {" "}
          <strong>{artist.phone_number}</strong>
        </p>
        <Divider />
        <Calendar artistDates={availableArtistDates()} artist={artist} />
        <hr></hr>
        <p>
          <a href="https://open.spotify.com/user/tigiras?si=yy15Im-RQiiJUk2TQTzROA">
            <Icon name="spotify" alt="Spotify link"></Icon>
          </a>
          <a href="https://www.instagram.com/">
            <Icon name="instagram" alt="instagram link"></Icon>
          </a>
        </p>
      </Card>
    </Container>
  );
}

const container = { width: "fit-content" };
const text = { margin: "5px", textAlign: "center" };
const color = {
  backgroundColor: "lightgrey",
};
