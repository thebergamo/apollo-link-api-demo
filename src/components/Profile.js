import React from "react";
import Collapsible from "./Collapsible";
import Giphy from "../containers/Giphy";

const Profile = character => (
  <section>
    <img src={character.image.large} />
    <h1>{`${character.name.full}(${character.name.native})`}</h1>
    <section>
      <h3>Description</h3>
      <Collapsible content={character.description} showMax={50} />
      <Giphy search={character.name.first || character.name.full} />
    </section>
  </section>
);

export default Profile;
