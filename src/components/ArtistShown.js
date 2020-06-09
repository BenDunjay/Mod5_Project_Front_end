import React from "react";
import { Link } from "react-router-dom";

export default function ArtistShown(props) {
  return (
    <div>
      <p>Hey this is {props.artist.name} when clicked on </p>
      <button>
        <Link to={`/artist_profile/${props.artist.name}`}>Artist Profile</Link>
      </button>
    </div>
  );
}
