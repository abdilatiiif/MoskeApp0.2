import "./content.css";
/* eslint-disable react/prop-types */

export default function Row(props) {
  const styles = {
    color: props.color,
  };

  return props.active ? (
    <div className="jump">
      <div className={props.classname}>
        <p className="bønn--navn">{props.bønn}</p>
        <p>{props.bønntid}</p>
        <p className="arabi bønn--navn">{props.arabisknavn}</p>
        <p style={styles}>{props.jamaat}</p>
      </div>
    </div>
  ) : (
    <div className={props.classname}>
      <div className="bønn--navn">
        {props.bønn}
        <div className="bønn--navn"> {props.arabisknavn}</div>
      </div>
      <p>{props.bønntid}</p>

      <p style={styles}>{props.jamaat}</p>
    </div>
  );
}
