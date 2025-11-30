import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "06:29",
      jamat_fajr: "",
      soloppgang: "08:57",
      duhur: "12:09",
      asr: "13:00",
      maghrib: "15:14",
      isha: "17:29",
    },
    2: {
      fajr: "06:31",
      jamat_fajr: "",
      soloppgang: "08:59",
      duhur: "12:09",
      asr: "13:00",
      maghrib: "15:12",
      isha: "17:29",
    },
    3: {
      fajr: "06:32",
      jamat_fajr: "",
      soloppgang: "09:01",
      duhur: "12:10",
      asr: "12:59",
      maghrib: "15:11",
      isha: "17:28",
    },
    4: {
      fajr: "06:34",
      jamat_fajr: "",
      soloppgang: "09:03",
      duhur: "12:10",
      asr: "12:59",
      maghrib: "15:10",
      isha: "17:27",
    },
    5: {
      fajr: "06:35",
      jamat_fajr: "",
      soloppgang: "09:05",
      duhur: "12:30",
      asr: "13:30",
      maghrib: "15:09",
      isha: "17:27",
    },
    6: {
      fajr: "06:36",
      jamat_fajr: "",
      soloppgang: "09:07",
      duhur: "12:11",
      asr: "12:58",
      maghrib: "15:08",
      isha: "17:26",
    },
    7: {
      fajr: "06:38",
      jamat_fajr: "",
      soloppgang: "09:09",
      duhur: "12:11",
      asr: "12:57",
      maghrib: "15:07",
      isha: "17:26",
    },
    8: {
      fajr: "06:39",
      jamat_fajr: "",
      soloppgang: "09:11",
      duhur: "12:12",
      asr: "12:57",
      maghrib: "15:06",
      isha: "17:26",
    },
    9: {
      fajr: "06:40",
      jamat_fajr: "",
      soloppgang: "09:12",
      duhur: "12:12",
      asr: "12:57",
      maghrib: "15:06",
      isha: "17:26",
    },
    10: {
      fajr: "06:41",
      jamat_fajr: "",
      soloppgang: "09:14",
      duhur: "12:13",
      asr: "12:56",
      maghrib: "15:05",
      isha: "17:25",
    },
    11: {
      fajr: "06:42",
      jamat_fajr: "",
      soloppgang: "09:15",
      duhur: "12:13",
      asr: "12:56",
      maghrib: "15:04",
      isha: "17:25",
    },
    12: {
      fajr: "06:43",
      jamat_fajr: "",
      soloppgang: "09:17",
      duhur: "12:30",
      asr: "13:30",
      maghrib: "15:04",
      isha: "17:25",
    },
    13: {
      fajr: "06:44",
      jamat_fajr: "",
      soloppgang: "09:18",
      duhur: "12:14",
      asr: "12:56",
      maghrib: "15:03",
      isha: "17:25",
    },
    14: {
      fajr: "06:45",
      jamat_fajr: "",
      soloppgang: "09:19",
      duhur: "12:15",
      asr: "12:56",
      maghrib: "15:03",
      isha: "17:25",
    },
    15: {
      fajr: "06:46",
      jamat_fajr: "",
      soloppgang: "09:20",
      duhur: "12:15",
      asr: "12:56",
      maghrib: "15:03",
      isha: "17:25",
    },
    16: {
      fajr: "06:47",
      jamat_fajr: "",
      soloppgang: "09:21",
      duhur: "12:16",
      asr: "12:56",
      maghrib: "15:03",
      isha: "17:25",
    },
    17: {
      fajr: "06:48",
      jamat_fajr: "",
      soloppgang: "09:22",
      duhur: "12:16",
      asr: "12:57",
      maghrib: "15:03",
      isha: "17:25",
    },
    18: {
      fajr: "06:49",
      jamat_fajr: "",
      soloppgang: "09:23",
      duhur: "12:17",
      asr: "12:57",
      maghrib: "15:03",
      isha: "17:26",
    },
    19: {
      fajr: "06:49",
      jamat_fajr: "",
      soloppgang: "09:24",
      duhur: "12:30",
      asr: "13:30",
      maghrib: "15:03",
      isha: "17:26",
    },
    20: {
      fajr: "06:50",
      jamat_fajr: "",
      soloppgang: "09:25",
      duhur: "12:18",
      asr: "12:58",
      maghrib: "15:03",
      isha: "17:26",
    },
    21: {
      fajr: "06:50",
      jamat_fajr: "",
      soloppgang: "09:25",
      duhur: "12:18",
      asr: "12:58",
      maghrib: "15:04",
      isha: "17:27",
    },
    22: {
      fajr: "06:51",
      jamat_fajr: "",
      soloppgang: "09:26",
      duhur: "12:19",
      asr: "12:58",
      maghrib: "15:04",
      isha: "17:27",
    },
    23: {
      fajr: "06:51",
      jamat_fajr: "",
      soloppgang: "09:26",
      duhur: "12:19",
      asr: "12:59",
      maghrib: "15:05",
      isha: "17:28",
    },
    24: {
      fajr: "06:52",
      jamat_fajr: "",
      soloppgang: "09:26",
      duhur: "12:20",
      asr: "13:00",
      maghrib: "15:06",
      isha: "17:29",
    },
    25: {
      fajr: "06:52",
      jamat_fajr: "",
      soloppgang: "09:26",
      duhur: "12:20",
      asr: "13:00",
      maghrib: "15:07",
      isha: "17:29",
    },
    26: {
      fajr: "06:52",
      jamat_fajr: "",
      soloppgang: "09:27",
      duhur: "12:30",
      asr: "13:30",
      maghrib: "15:07",
      isha: "17:30",
    },
    27: {
      fajr: "06:52",
      jamat_fajr: "",
      soloppgang: "09:26",
      duhur: "12:21",
      asr: "13:02",
      maghrib: "15:09",
      isha: "17:31",
    },
    28: {
      fajr: "06:53",
      jamat_fajr: "",
      soloppgang: "09:26",
      duhur: "12:21",
      asr: "13:03",
      maghrib: "15:10",
      isha: "17:32",
    },
    29: {
      fajr: "06:53",
      jamat_fajr: "",
      soloppgang: "09:26",
      duhur: "12:22",
      asr: "13:04",
      maghrib: "15:11",
      isha: "17:33",
    },
    30: {
      fajr: "06:53",
      jamat_fajr: "",
      soloppgang: "09:26",
      duhur: "12:22",
      asr: "13:05",
      maghrib: "15:12",
      isha: "17:34",
    },
    31: {
      fajr: "06:53",
      jamat_fajr: "",
      soloppgang: "09:25",
      duhur: "12:23",
      asr: "13:06",
      maghrib: "15:14",
      isha: "17:35",
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
