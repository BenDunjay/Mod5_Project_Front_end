import React from "react";
import Calendar from "./Calendar";
import { Icon, Container, Divider, Card, Image } from "semantic-ui-react";

export default function ArtistProfile({ artist }) {
  const availableArtistDates = () => {
    return artist.availabilities.map((element) => element);
  };

  return (
    <Container textAlign="center">
      <Card>
        <Image src={artist.profile_picture} alt="Artist Profile" />
        {/* <h2>{artist.name}</h2> */}
        <h3>{artist.username}</h3>
        <p> {artist.email_address}</p>
        <p> {artist.artist_genre}</p>
        <p> {artist.bio}</p>
        <p> {artist.phone_number}</p>
        <Divider />
        <Calendar artistDates={availableArtistDates()} artist={artist} />
        <hr></hr>
        <a href="https://open.spotify.com/user/tigiras?si=yy15Im-RQiiJUk2TQTzROA">
          <Icon name="spotify" alt="Spotify link"></Icon>
        </a>
        <a href="https://www.instagram.com/">
          <Icon name="instagram" alt="instagram link"></Icon>
        </a>
      </Card>
    </Container>
  );
}
