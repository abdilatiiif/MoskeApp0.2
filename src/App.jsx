import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "02:46",
      jamat_fajr: "",
      soloppgang: "03:44",
      duhur: "13:29",
      asr: "18:02",
      maghrib: "22:57",
      isha: "23:37",
    },
    2: {
      fajr: "02:47",
      jamat_fajr: "",
      soloppgang: "03:45",
      duhur: "13:29",
      asr: "18:02",
      maghrib: "22:56",
      isha: "23:36",
    },
    3: {
      fajr: "02:48",
      jamat_fajr: "",
      soloppgang: "03:46",
      duhur: "14:00",
      asr: "18:02",
      maghrib: "22:55",
      isha: "23:35",
    },
    4: {
      fajr: "02:49",
      jamat_fajr: "",
      soloppgang: "03:47",
      duhur: "13:29",
      asr: "18:01",
      maghrib: "22:54",
      isha: "23:34",
    },
    5: {
      fajr: "02:51",
      jamat_fajr: "",
      soloppgang: "03:49",
      duhur: "13:29",
      asr: "18:01",
      maghrib: "22:53",
      isha: "23:33",
    },
    6: {
      fajr: "02:52",
      jamat_fajr: "",
      soloppgang: "03:50",
      duhur: "13:30",
      asr: "18:01",
      maghrib: "22:52",
      isha: "23:32",
    },
    7: {
      fajr: "02:54",
      jamat_fajr: "",
      soloppgang: "03:52",
      duhur: "13:30",
      asr: "18:01",
      maghrib: "22:51",
      isha: "23:31",
    },
    8: {
      fajr: "02:56",
      jamat_fajr: "",
      soloppgang: "03:54",
      duhur: "13:30",
      asr: "18:00",
      maghrib: "22:49",
      isha: "23:29",
    },
    9: {
      fajr: "02:57",
      jamat_fajr: "",
      soloppgang: "03:55",
      duhur: "13:30",
      asr: "18:00",
      maghrib: "22:48",
      isha: "23:28",
    },
    10: {
      fajr: "02:59",
      jamat_fajr: "",
      soloppgang: "03:57",
      duhur: "14:00",
      asr: "18:00",
      maghrib: "22:46",
      isha: "23:26",
    },
    11: {
      fajr: "03:01",
      jamat_fajr: "",
      soloppgang: "03:59",
      duhur: "13:30",
      asr: "17:59",
      maghrib: "22:45",
      isha: "23:25",
    },
    12: {
      fajr: "03:03",
      jamat_fajr: "",
      soloppgang: "04:01",
      duhur: "13:31",
      asr: "17:59",
      maghrib: "22:43",
      isha: "23:23",
    },
    13: {
      fajr: "03:05",
      jamat_fajr: "",
      soloppgang: "04:03",
      duhur: "13:31",
      asr: "17:59",
      maghrib: "22:41",
      isha: "23:21",
    },
    14: {
      fajr: "03:07",
      jamat_fajr: "",
      soloppgang: "04:05",
      duhur: "13:31",
      asr: "17:58",
      maghrib: "22:39",
      isha: "23:19",
    },
    15: {
      fajr: "03:09",
      jamat_fajr: "",
      soloppgang: "04:07",
      duhur: "13:31",
      asr: "17:58",
      maghrib: "22:38",
      isha: "23:18",
    },
    16: {
      fajr: "03:11",
      jamat_fajr: "",
      soloppgang: "04:09",
      duhur: "13:31",
      asr: "17:57",
      maghrib: "22:36",
      isha: "23:16",
    },
    17: {
      fajr: "03:13",
      jamat_fajr: "",
      soloppgang: "04:11",
      duhur: "14:00",
      asr: "17:57",
      maghrib: "22:34",
      isha: "23:14",
    },
    18: {
      fajr: "03:16",
      jamat_fajr: "",
      soloppgang: "04:14",
      duhur: "13:31",
      asr: "17:56",
      maghrib: "22:32",
      isha: "23:12",
    },
    19: {
      fajr: "03:18",
      jamat_fajr: "",
      soloppgang: "04:16",
      duhur: "13:31",
      asr: "17:55",
      maghrib: "22:30",
      isha: "23:10",
    },
    20: {
      fajr: "03:20",
      jamat_fajr: "",
      soloppgang: "04:18",
      duhur: "13:31",
      asr: "17:55",
      maghrib: "22:27",
      isha: "23:07",
    },
    21: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "04:20",
      duhur: "13:31",
      asr: "17:54",
      maghrib: "22:25",
      isha: "23:05",
    },
    22: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "04:23",
      duhur: "13:31",
      asr: "17:53",
      maghrib: "22:23",
      isha: "23:03",
    },
    23: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "04:25",
      duhur: "13:31",
      asr: "17:52",
      maghrib: "22:21",
      isha: "23:01",
    },
    24: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "04:27",
      duhur: "14:00",
      asr: "17:52",
      maghrib: "22:18",
      isha: "23:00",
    },
    25: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "04:30",
      duhur: "13:31",
      asr: "17:51",
      maghrib: "22:16",
      isha: "22:59",
    },
    26: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "04:32",
      duhur: "13:31",
      asr: "17:50",
      maghrib: "22:14",
      isha: "22:57",
    },
    27: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "04:35",
      duhur: "13:31",
      asr: "17:49",
      maghrib: "22:11",
      isha: "22:56",
    },
    28: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "04:37",
      duhur: "13:31",
      asr: "17:48",
      maghrib: "22:09",
      isha: "22:55",
    },
    29: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "04:40",
      duhur: "13:31",
      asr: "17:47",
      maghrib: "22:06",
      isha: "22:54",
    },
    30: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "04:42",
      duhur: "13:31",
      asr: "17:46",
      maghrib: "22:04",
      isha: "22:53",
    },
    31: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "04:45",
      duhur: "14:00",
      asr: "17:45",
      maghrib: "22:01",
      isha: "22:51",
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
