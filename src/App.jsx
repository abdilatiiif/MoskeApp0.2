import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "02:53",
      jamat_fajr: "", // Mangler i kilden
      soloppgang: "03:55",
      duhur: "13:30",
      asr: "17:52",
      maghrib: "22:38",
      isha: "23:18",
    },
    2: {
      fajr: "02:51",
      jamat_fajr: "",
      soloppgang: "03:54",
      duhur: "13:30",
      asr: "17:53",
      maghrib: "22:39",
      isha: "23:19",
    },
    3: {
      fajr: "02:50",
      jamat_fajr: "",
      soloppgang: "03:52",
      duhur: "13:30",
      asr: "17:53",
      maghrib: "22:41",
      isha: "23:21",
    },
    4: {
      fajr: "02:48",
      jamat_fajr: "",
      soloppgang: "03:51",
      duhur: "13:30",
      asr: "17:54",
      maghrib: "22:43",
      isha: "23:23",
    },
    5: {
      fajr: "02:47",
      jamat_fajr: "",
      soloppgang: "03:49",
      duhur: "13:30",
      asr: "17:55",
      maghrib: "22:45",
      isha: "23:25",
    },
    6: {
      fajr: "02:46",
      jamat_fajr: "",
      soloppgang: "03:48",
      duhur: "14:00",
      asr: "17:55",
      maghrib: "22:46",
      isha: "23:26",
    },
    7: {
      fajr: "02:45",
      jamat_fajr: "",
      soloppgang: "03:47",
      duhur: "13:30",
      asr: "17:56",
      maghrib: "22:48",
      isha: "23:28",
    },
    8: {
      fajr: "02:44",
      jamat_fajr: "",
      soloppgang: "03:46",
      duhur: "13:30",
      asr: "17:56",
      maghrib: "22:49",
      isha: "23:29",
    },
    9: {
      fajr: "02:43",
      jamat_fajr: "",
      soloppgang: "03:45",
      duhur: "13:30",
      asr: "17:57",
      maghrib: "22:51",
      isha: "23:31",
    },
    10: {
      fajr: "02:42",
      jamat_fajr: "",
      soloppgang: "03:44",
      duhur: "13:30",
      asr: "17:57",
      maghrib: "22:52",
      isha: "23:32",
    },
    11: {
      fajr: "02:41",
      jamat_fajr: "",
      soloppgang: "03:43",
      duhur: "13:30",
      asr: "17:58",
      maghrib: "22:53",
      isha: "23:33",
    },
    12: {
      fajr: "02:40",
      jamat_fajr: "",
      soloppgang: "03:42",
      duhur: "13:30",
      asr: "17:58",
      maghrib: "22:54",
      isha: "23:34",
    },
    13: {
      fajr: "02:40",
      jamat_fajr: "",
      soloppgang: "03:41",
      duhur: "14:00",
      asr: "17:59",
      maghrib: "22:55",
      isha: "23:35",
    },
    14: {
      fajr: "02:39",
      jamat_fajr: "",
      soloppgang: "03:41",
      duhur: "13:30",
      asr: "17:59",
      maghrib: "22:56",
      isha: "23:36",
    },
    15: {
      fajr: "02:39",
      jamat_fajr: "",
      soloppgang: "03:40",
      duhur: "13:30",
      asr: "17:59",
      maghrib: "22:57",
      isha: "23:37",
    },
    16: {
      fajr: "02:38",
      jamat_fajr: "",
      soloppgang: "03:40",
      duhur: "13:30",
      asr: "18:00",
      maghrib: "22:58",
      isha: "23:38",
    },
    17: {
      fajr: "02:38",
      jamat_fajr: "",
      soloppgang: "03:40",
      duhur: "13:30",
      asr: "18:00",
      maghrib: "22:58",
      isha: "23:38",
    },
    18: {
      fajr: "02:38",
      jamat_fajr: "",
      soloppgang: "03:40",
      duhur: "13:30",
      asr: "18:00",
      maghrib: "22:59",
      isha: "23:39",
    },
    19: {
      fajr: "02:38",
      jamat_fajr: "",
      soloppgang: "03:40",
      duhur: "13:30",
      asr: "18:01",
      maghrib: "22:59",
      isha: "23:39",
    },
    20: {
      fajr: "02:38",
      jamat_fajr: "",
      soloppgang: "03:40",
      duhur: "14:00",
      asr: "18:01",
      maghrib: "23:00",
      isha: "23:40",
    },
    21: {
      fajr: "02:38",
      jamat_fajr: "",
      soloppgang: "03:40",
      duhur: "13:30",
      asr: "18:01",
      maghrib: "23:00",
      isha: "23:40",
    },
    22: {
      fajr: "02:39",
      jamat_fajr: "",
      soloppgang: "03:40",
      duhur: "13:30",
      asr: "18:01",
      maghrib: "23:00",
      isha: "23:40",
    },
    23: {
      fajr: "02:39",
      jamat_fajr: "",
      soloppgang: "03:40",
      duhur: "13:30",
      asr: "18:02",
      maghrib: "23:00",
      isha: "23:40",
    },
    24: {
      fajr: "02:40",
      jamat_fajr: "",
      soloppgang: "03:41",
      duhur: "13:30",
      asr: "18:02",
      maghrib: "23:00",
      isha: "23:40",
    },
    25: {
      fajr: "02:40",
      jamat_fajr: "",
      soloppgang: "03:41",
      duhur: "13:30",
      asr: "18:02",
      maghrib: "23:00",
      isha: "23:40",
    },
    26: {
      fajr: "02:41",
      jamat_fajr: "",
      soloppgang: "03:42",
      duhur: "13:30",
      asr: "18:02",
      maghrib: "23:00",
      isha: "23:40",
    },
    27: {
      fajr: "02:42",
      jamat_fajr: "",
      soloppgang: "03:42",
      duhur: "14:00",
      asr: "18:02",
      maghrib: "22:59",
      isha: "23:39",
    },
    28: {
      fajr: "02:43",
      jamat_fajr: "",
      soloppgang: "03:43",
      duhur: "13:30",
      asr: "18:02",
      maghrib: "22:59",
      isha: "23:39",
    },
    29: {
      fajr: "02:44",
      jamat_fajr: "",
      soloppgang: "03:44",
      duhur: "13:30",
      asr: "18:02",
      maghrib: "22:58",
      isha: "23:38",
    },
    30: {
      fajr: "02:45",
      jamat_fajr: "",
      soloppgang: "03:45",
      duhur: "13:30",
      asr: "18:02",
      maghrib: "22:58",
      isha: "23:38",
    },
  },
];

function App() {
  const [time, setTime] = React.useState("19:00:23");
  const [date, setDate] = React.useState("Søndag-12/September-2025");

  // klokka og Dato
  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString("en-GB");

      setTime(time);

      function formatDate(date) {
        const days = [
          "Søndag",
          "Mandag",
          "Tirsdag",
          "Onsdag",
          "Torsdag",
          "Fredag",
          "Lørdag",
        ];

        const months = [
          "Januar",
          "Februar",
          "Mars",
          "April",
          "Mai",
          "Juni",
          "Juli",
          "August",
          "September",
          "Oktober",
          "November",
          "Desember",
        ];

        const dayName = days[date.getDay()];
        const day = date.getDate();
        const monthName = months[date.getMonth()];
        const year = date.getFullYear();

        return `${dayName}-${day}/${monthName}-${year}`;
      }

      setDate(formatDate(now));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app--container">
      <Timedate time={time} date={date} />
      <Content bønnetider={bonnetider} />
    </div>
  );
}

export default App;
