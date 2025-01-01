import "./content.css";
/* eslint-disable react/prop-types */

export default function Row(props) {
  const styles = {
    color: props.color,
  };

  return (
    <div className={props.classname}>
      <p>{props.bønn}</p>
      <p>{props.bønntid}</p>
      <p> {props.arabisknavn}</p>
      <p style={styles}>{props.jamaat}</p>
    </div>
  );
}
