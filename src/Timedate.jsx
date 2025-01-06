/* eslint-disable react/prop-types */
import "./timedate.css";

export default function TimeDate(props) {
  return (
    <header className="header--timedate">
      <div className="time">{props.time}</div>
      <div className="date">{props.date}</div>
      <img className="symbol s1" src="src/pngwing.com.png" alt="symbol" />
      <img className="symbol s2" src="src/pngwing.com.png" alt="symbol" />
      <img className="symbol s3" src="src/pngwing.com.png" alt="symbol" />
    </header>
  );
}
