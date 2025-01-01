import "./content.css";
/* eslint-disable react/prop-types */
import React from "react";

export default function Row(props) {
  const styles = {
    color: props.color,
  };

  return props.active ? (
    <div className="jump">
      <div className={props.classname}>
        <p>{props.bønn}</p>
        <p>{props.bønntid}</p>
        <p> {props.arabisknavn}</p>
        <p style={styles}>{props.jamaat}</p>
      </div>
    </div>
  ) : (
    <div className={props.classname}>
      <p>{props.bønn}</p>
      <p>{props.bønntid}</p>
      <p> {props.arabisknavn}</p>
      <p style={styles}>{props.jamaat}</p>
    </div>
  );
}
