import React from "react";
import Vancouver from "../Vancouver.jpg";

export default function NoArtistShown() {
  return (
    <div>
      <h2 className="paragraph">
        {" "}
        Background Of The Local Artist Scene In Vancouver
      </h2>
      <p className="paragraph">
        Bars that regularly host live music include The Railway Club, The
        Lamplighter, The Media Club, The Red Room, the Bourbon, Anza Club, The
        Astoria, The Biltmore, Pub 340, Venue (formerly the Plaza), the Rickshaw
        Theatre, Pat's Pub and the Admiral Pub. Vancouver's notoriously strict
        licensing policies and the more recent tendency to convert increasingly
        valuable real estate into condominiums caused the closing of many bars
        or venues presenting live music: the Cobalt, The Sugar Refinery, the
        Mesa Luna, the Starfish Room and Richard's on Richards and The Waldorf
        Hotel. These factors have also created an illegal underground venue
        scene which is regularly at odds with City Hall and the police. The
        unfortunate result is that since 2000 there are far fewer venues. For
        local musicians and musical groups, venues where can perform and
        establish themselves are hard to find or rent. This has negatively
        impacted Vancouver's cultural "business" and life.
      </p>
      <div>
        <img src={Vancouver} alt="Vancouver City" className="image"></img>{" "}
      </div>
    </div>
  );
}

const styling = {
  color: "lightgrey",
};
