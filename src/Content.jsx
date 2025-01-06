/* eslint-disable react/prop-types */
import "./content.css";
import Row from "./Row";
import React from "react";

export default function Content(props) {
  //bønnetider
  const [fajr, setFajr] = React.useState("14:33");
  const [jamat_fajr, SetJamat_fajr] = React.useState("03:33");
  const [soloppgang, setSoloppgang] = React.useState("13:33");
  const [duhur, setDuhur] = React.useState("13:33");
  const [asr, setAsr] = React.useState("13:33");
  const [maghrib, setMaggrib] = React.useState("13:33");
  const [isha, setIsha] = React.useState("13:33");
  const [jummah, setJummah] = React.useState("13:33");
  const [active, setActive] = React.useState(false);
  //Jamat tider
  const [duhurjamat, setDuhurjamat] = React.useState("13:33");
  const [asrjamat, setAsrjamat] = React.useState("13:33");
  const [maghribjamat, setMaghribjamat] = React.useState("13:33");
  const [ishajamat, setIshajamat] = React.useState("13:33");

  React.useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const bønnIdag = props.bønnetider[0][day];

    // animasjoner //////////////////////////////////////////////////

    function giveAnimation(bønnIdag) {
      const allBønn = Object.keys(bønnIdag).map((key) => bønnIdag[key]);
      console.log(allBønn);

      const date = new Date();
      const newHours = String(date.getHours()).padStart(2, "0");
      const newMinutes = String(date.getMinutes()).padStart(2, "0");

      const currentTime = `${newHours}:${newMinutes}`;

      console.log(currentTime > "20:41");

      /// jobb videre med å finne neste bønn til animasjon og endre state navn på flere plasser
    }

    giveAnimation(bønnIdag);

    ////////////////////////////////////////////////////////
    // legge til tid

    function addMinutes(time, minAdd) {
      const [hours, minutes] = time.split(":").map(Number);
      const date = new Date();
      date.setHours(hours, minutes + minAdd, 0, 0);

      const newHours = String(date.getHours()).padStart(2, "0");
      const newMinutes = String(date.getMinutes()).padStart(2, "0");

      return `${newHours}:${newMinutes}`;
    }
    setDuhurjamat(addMinutes(bønnIdag.duhur, 10));
    setAsrjamat(addMinutes(bønnIdag.asr, 10));
    setMaghribjamat(addMinutes(bønnIdag.maghrib, 5));
    setIshajamat(addMinutes(bønnIdag.isha, 5));
    //////////////////////////////////////////////////////

    setFajr(bønnIdag.fajr);
    SetJamat_fajr(bønnIdag.jamat_fajr);
    setSoloppgang(bønnIdag.soloppgang);
    setDuhur(bønnIdag.duhur);
    setAsr(bønnIdag.asr);
    setMaggrib(bønnIdag.maghrib);
    setIsha(bønnIdag.isha);
    setJummah("12:30"); // fredags bønner kan endres
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="content--container">
      <div className="bismillah--container">﷽</div>
      <div className="content--tabell">
        <Row
          classname="content--tabell--overskrift"
          bønntid="Start tid"
          jamaat="Jamaat tid"
          color={"#119A28"}
        />
        <Row
          classname="content--tabell--row"
          active={active}
          bønntid={fajr}
          jamaat={jamat_fajr}
          arabisknavn="الفجر"
          bønn="Fajr"
        />
        <Row
          classname="content--tabell--row"
          active={active}
          bønntid={soloppgang}
          jamaat={<img className="moske" src="src/sun-solid.svg" />}
          arabisknavn="طلوع الشمس"
          bønn="Soloppgang"
        />
        <Row
          classname="content--tabell--row"
          active={active}
          bønntid={duhur}
          jamaat={duhurjamat}
          arabisknavn="الظهر"
          bønn="Duhur"
        />
        <Row
          classname="content--tabell--row"
          active={active}
          bønntid={asr}
          jamaat={asrjamat}
          arabisknavn="العصر"
          bønn="Asr"
        />
        <Row
          classname="content--tabell--row"
          active={active}
          bønntid={maghrib}
          jamaat={maghribjamat}
          arabisknavn="المغرب"
          bønn="Maghrib"
        />
        <Row
          classname="content--tabell--row"
          active={active}
          bønntid={isha}
          jamaat={ishajamat}
          arabisknavn="العشاء"
          bønn="Isha"
        />
        <Row
          classname="content--tabell--row"
          active={active}
          bønntid={jummah}
          jamaat={<img className="moske" src="src/mosque-solid.svg" />}
          arabisknavn="صلاة الجمعة"
          bønn="Jummah"
        />
      </div>
      <div className="bismillah--container flip">﷽</div>
    </div>
  );
}
