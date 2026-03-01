import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "05:09",
      jamat_fajr: "",
      soloppgang: "07:13",
      duhur: "12:32",
      asr: "14:53",
      maghrib: "17:44",
      isha: "19:38",
    },
    2: {
      fajr: "05:06",
      jamat_fajr: "",
      soloppgang: "07:10",
      duhur: "12:32",
      asr: "14:55",
      maghrib: "17:47",
      isha: "19:41",
    },
    3: {
      fajr: "05:03",
      jamat_fajr: "",
      soloppgang: "07:07",
      duhur: "12:32",
      asr: "14:57",
      maghrib: "17:50",
      isha: "19:44",
    },
    4: {
      fajr: "05:00",
      jamat_fajr: "",
      soloppgang: "07:04",
      duhur: "12:32",
      asr: "14:59",
      maghrib: "17:52",
      isha: "19:46",
    },
    5: {
      fajr: "04:57",
      jamat_fajr: "",
      soloppgang: "07:01",
      duhur: "12:31",
      asr: "15:01",
      maghrib: "17:55",
      isha: "19:49",
    },
    6: {
      fajr: "04:54",
      jamat_fajr: "",
      soloppgang: "06:58",
      duhur: "13:30",
      asr: "15:03",
      maghrib: "17:58",
      isha: "19:52",
    },
    7: {
      fajr: "04:51",
      jamat_fajr: "",
      soloppgang: "06:55",
      duhur: "12:31",
      asr: "15:04",
      maghrib: "18:00",
      isha: "19:54",
    },
    8: {
      fajr: "04:47",
      jamat_fajr: "",
      soloppgang: "06:51",
      duhur: "12:31",
      asr: "15:06",
      maghrib: "18:03",
      isha: "19:57",
    },
    9: {
      fajr: "04:44",
      jamat_fajr: "",
      soloppgang: "06:48",
      duhur: "12:30",
      asr: "15:08",
      maghrib: "18:05",
      isha: "20:00",
    },
    10: {
      fajr: "04:41",
      jamat_fajr: "",
      soloppgang: "06:45",
      duhur: "12:30",
      asr: "15:10",
      maghrib: "18:08",
      isha: "20:03",
    },
    11: {
      fajr: "04:37",
      jamat_fajr: "",
      soloppgang: "06:42",
      duhur: "12:30",
      asr: "15:11",
      maghrib: "18:11",
      isha: "20:05",
    },
    12: {
      fajr: "04:34",
      jamat_fajr: "",
      soloppgang: "06:39",
      duhur: "12:30",
      asr: "15:13",
      maghrib: "18:13",
      isha: "20:08",
    },
    13: {
      fajr: "04:30",
      jamat_fajr: "",
      soloppgang: "06:36",
      duhur: "13:30",
      asr: "15:15",
      maghrib: "18:16",
      isha: "20:11",
    },
    14: {
      fajr: "04:27",
      jamat_fajr: "",
      soloppgang: "06:33",
      duhur: "12:29",
      asr: "15:17",
      maghrib: "18:18",
      isha: "20:14",
    },
    15: {
      fajr: "04:24",
      jamat_fajr: "",
      soloppgang: "06:30",
      duhur: "12:29",
      asr: "15:18",
      maghrib: "18:21",
      isha: "20:17",
    },
    16: {
      fajr: "04:20",
      jamat_fajr: "",
      soloppgang: "06:26",
      duhur: "12:28",
      asr: "15:20",
      maghrib: "18:23",
      isha: "20:20",
    },
    17: {
      fajr: "04:16",
      jamat_fajr: "",
      soloppgang: "06:23",
      duhur: "12:28",
      asr: "15:22",
      maghrib: "18:26",
      isha: "20:23",
    },
    18: {
      fajr: "04:13",
      jamat_fajr: "",
      soloppgang: "06:20",
      duhur: "12:28",
      asr: "15:23",
      maghrib: "18:29",
      isha: "20:26",
    },
    19: {
      fajr: "04:09",
      jamat_fajr: "",
      soloppgang: "06:17",
      duhur: "12:28",
      asr: "15:25",
      maghrib: "18:31",
      isha: "20:29",
    },
    20: {
      fajr: "04:05",
      jamat_fajr: "",
      soloppgang: "06:14",
      duhur: "13:30",
      asr: "15:27",
      maghrib: "18:34",
      isha: "20:32",
    },
    21: {
      fajr: "04:02",
      jamat_fajr: "",
      soloppgang: "06:11",
      duhur: "12:32",
      asr: "15:28",
      maghrib: "18:36",
      isha: "20:35",
    },
    22: {
      fajr: "03:58",
      jamat_fajr: "",
      soloppgang: "06:08",
      duhur: "12:32",
      asr: "15:30",
      maghrib: "18:39",
      isha: "20:38",
    },
    23: {
      fajr: "03:54",
      jamat_fajr: "",
      soloppgang: "06:04",
      duhur: "12:31",
      asr: "15:31",
      maghrib: "18:41",
      isha: "20:41",
    },
    24: {
      fajr: "03:50",
      jamat_fajr: "",
      soloppgang: "06:01",
      duhur: "12:31",
      asr: "15:33",
      maghrib: "18:44",
      isha: "20:45",
    },
    25: {
      fajr: "03:46",
      jamat_fajr: "",
      soloppgang: "05:58",
      duhur: "12:31",
      asr: "15:34",
      maghrib: "18:47",
      isha: "20:48",
    },
    26: {
      fajr: "03:42",
      jamat_fajr: "",
      soloppgang: "05:55",
      duhur: "12:30",
      asr: "15:36",
      maghrib: "18:49",
      isha: "20:51",
    },
    27: {
      fajr: "03:38",
      jamat_fajr: "",
      soloppgang: "05:52",
      duhur: "13:30",
      asr: "15:38",
      maghrib: "18:52",
      isha: "20:55",
    },
    28: {
      fajr: "03:34",
      jamat_fajr: "",
      soloppgang: "05:49",
      duhur: "12:30",
      asr: "15:39",
      maghrib: "18:54",
      isha: "20:58",
    },
    29: {
      fajr: "04:30",
      jamat_fajr: "",
      soloppgang: "06:46",
      duhur: "13:30",
      asr: "16:41",
      maghrib: "19:57",
      isha: "22:02",
    },
    30: {
      fajr: "04:26",
      jamat_fajr: "",
      soloppgang: "06:42",
      duhur: "13:29",
      asr: "16:42",
      maghrib: "19:59",
      isha: "22:03",
    },
    31: {
      fajr: "04:21",
      jamat_fajr: "",
      soloppgang: "06:39",
      duhur: "13:29",
      asr: "16:43",
      maghrib: "20:02",
      isha: "22:04",
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
