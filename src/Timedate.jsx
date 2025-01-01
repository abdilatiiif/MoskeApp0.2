/* eslint-disable react/prop-types */
import "./timedate.css";

export default function TimeDate(props) {
  return (
    <header className="header--timedate">
      <div className="time">{props.time}</div>
      <div className="date">{props.date}</div>
    </header>
  );
}
