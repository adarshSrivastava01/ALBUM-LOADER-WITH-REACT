import React from "react";
import pics from "../../../assets/illustration-headphones-icon_53876-5571.jpg";
import "./Song.css";

let pic = null;

const song = (props) => {
  pic =
    props.song.image[2]["#text"] !== "" ? props.song.image[2]["#text"] : pics;
  return (
    <div className="Song">
      <div className="ImageBox">
        <img src={pic} alt="Song Poster" />
        <div className="Overlay"></div>
      </div>
      <div className="Song__heading">{props.song.name}</div>
      <a href={props.song.url} target="_blank">
        <i className="fa fa-play-circle Icon"></i>
      </a>
    </div>
  );
};

export default song;
