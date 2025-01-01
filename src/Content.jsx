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

  React.useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    console.log(day);
    const bønnIdag = props.bønnetider[0][day];
    console.log(bønnIdag);

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
          bønntid={fajr}
          jamaat={jamat_fajr}
          arabisknavn="الفجر"
          bønn="Fajr"
        />
        <Row
          classname="content--tabell--row"
          bønntid={soloppgang}
          jamaat="13:34"
          arabisknavn="طلوع الشمس"
          bønn="Soloppgang"
        />
        <Row
          classname="content--tabell--row"
          bønntid={duhur}
          jamaat="13:34"
          arabisknavn="الظهر"
          bønn="Duhur"
        />
        <Row
          classname="content--tabell--row"
          bønntid={asr}
          jamaat="13:34"
          arabisknavn="العصر"
          bønn="Asr"
        />
        <Row
          classname="content--tabell--row"
          bønntid={maghrib}
          jamaat="13:34"
          arabisknavn="المغرب"
          bønn="Maghrib"
        />
        <Row
          classname="content--tabell--row"
          bønntid={isha}
          jamaat="13:34"
          arabisknavn="العشاء"
          bønn="Isha"
        />
        <Row
          classname="content--tabell--row"
          bønntid={jummah}
          jamaat="13:34"
          arabisknavn="صلاة الجمعة"
          bønn="Jummah"
        />
      </div>
      <div className="bismillah--container flip">﷽</div>
    </div>
  );
}
