import React from "react";
import Song from "./Song/Song";
import "./Songs.css";
import Arrow from "../Arrow/Arrow";

const songs = (props) => {
  return (
    <div>
      <Arrow />
      <section className="Songs">
        {props.songs.map((song) => {
          return <Song song={song} />;
        })}
      </section>
    </div>
  );
};

export default songs;
