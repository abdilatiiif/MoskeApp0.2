import "./content.css";
import Row from "./Row";

export default function Content() {
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
          bønntid="13:33"
          jamaat="13:34"
          arabisknavn="الفجر"
          bønn="Fajr"
        />
        <Row
          classname="content--tabell--row"
          bønntid="13:33"
          jamaat="13:34"
          arabisknavn="طلوع الشمس"
          bønn="Soloppgang"
        />
        <Row
          classname="content--tabell--row"
          bønntid="13:33"
          jamaat="13:34"
          arabisknavn="الظهر"
          bønn="Duhur"
        />
        <Row
          classname="content--tabell--row"
          bønntid="13:33"
          jamaat="13:34"
          arabisknavn="العصر"
          bønn="Asr"
        />
        <Row
          classname="content--tabell--row"
          bønntid="13:33"
          jamaat="13:34"
          arabisknavn="المغرب"
          bønn="Maghrib"
        />
        <Row
          classname="content--tabell--row"
          bønntid="13:33"
          jamaat="13:34"
          arabisknavn="العشاء"
          bønn="Isha"
        />
        <Row
          classname="content--tabell--row"
          bønntid="13:33"
          jamaat="13:34"
          arabisknavn="صلاة الجمعة"
          bønn="Jummah"
        />
      </div>
      <div className="bismillah--container flip">﷽</div>
    </div>
  );
}
