import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "05:31",
      jamat_fajr: "",
      soloppgang: "07:40",
      duhur: "12:03",
      asr: "13:44",
      maghrib: "16:19",
      isha: "18:17",
    },
    2: {
      fajr: "05:33",
      jamat_fajr: "",
      soloppgang: "07:43",
      duhur: "12:03",
      asr: "13:42",
      maghrib: "16:17",
      isha: "18:14",
    },
    3: {
      fajr: "05:35",
      jamat_fajr: "",
      soloppgang: "07:46",
      duhur: "12:03",
      asr: "13:40",
      maghrib: "16:14",
      isha: "18:12",
    },
    4: {
      fajr: "05:37",
      jamat_fajr: "",
      soloppgang: "07:48",
      duhur: "12:03",
      asr: "13:38",
      maghrib: "16:11",
      isha: "18:10",
    },
    5: {
      fajr: "05:40",
      jamat_fajr: "",
      soloppgang: "07:51",
      duhur: "12:03",
      asr: "13:36",
      maghrib: "16:09",
      isha: "18:08",
    },
    6: {
      fajr: "05:42",
      jamat_fajr: "",
      soloppgang: "07:54",
      duhur: "12:03",
      asr: "13:34",
      maghrib: "16:06",
      isha: "18:06",
    },
    7: {
      fajr: "05:44",
      jamat_fajr: "",
      soloppgang: "07:57",
      duhur: "12:30",
      asr: "13:32",
      maghrib: "16:03",
      isha: "18:04",
    },
    8: {
      fajr: "05:46",
      jamat_fajr: "",
      soloppgang: "07:59",
      duhur: "12:04",
      asr: "13:30",
      maghrib: "16:01",
      isha: "18:02",
    },
    9: {
      fajr: "05:48",
      jamat_fajr: "",
      soloppgang: "08:02",
      duhur: "12:04",
      asr: "13:29",
      maghrib: "15:58",
      isha: "18:00",
    },
    10: {
      fajr: "05:50",
      jamat_fajr: "",
      soloppgang: "08:05",
      duhur: "12:04",
      asr: "13:27",
      maghrib: "15:56",
      isha: "17:58",
    },
    11: {
      fajr: "05:52",
      jamat_fajr: "",
      soloppgang: "08:07",
      duhur: "12:04",
      asr: "13:25",
      maghrib: "15:53",
      isha: "17:56",
    },
    12: {
      fajr: "05:55",
      jamat_fajr: "",
      soloppgang: "08:10",
      duhur: "12:04",
      asr: "13:24",
      maghrib: "15:51",
      isha: "17:54",
    },
    13: {
      fajr: "05:57",
      jamat_fajr: "",
      soloppgang: "08:13",
      duhur: "12:04",
      asr: "13:22",
      maghrib: "15:49",
      isha: "17:52",
    },
    14: {
      fajr: "05:59",
      jamat_fajr: "",
      soloppgang: "08:15",
      duhur: "12:30",
      asr: "13:20",
      maghrib: "15:46",
      isha: "17:51",
    },
    15: {
      fajr: "06:01",
      jamat_fajr: "",
      soloppgang: "08:18",
      duhur: "12:04",
      asr: "13:19",
      maghrib: "15:44",
      isha: "17:49",
    },
    16: {
      fajr: "06:03",
      jamat_fajr: "",
      soloppgang: "08:21",
      duhur: "12:05",
      asr: "13:17",
      maghrib: "15:42",
      isha: "17:47",
    },
    17: {
      fajr: "06:05",
      jamat_fajr: "",
      soloppgang: "08:23",
      duhur: "12:05",
      asr: "13:16",
      maghrib: "15:39",
      isha: "17:46",
    },
    18: {
      fajr: "06:07",
      jamat_fajr: "",
      soloppgang: "08:26",
      duhur: "12:05",
      asr: "13:14",
      maghrib: "15:37",
      isha: "17:44",
    },
    19: {
      fajr: "06:09",
      jamat_fajr: "",
      soloppgang: "08:28",
      duhur: "12:05",
      asr: "13:13",
      maghrib: "15:35",
      isha: "17:43",
    },
    20: {
      fajr: "06:10",
      jamat_fajr: "",
      soloppgang: "08:31",
      duhur: "12:05",
      asr: "13:12",
      maghrib: "15:33",
      isha: "17:41",
    },
    21: {
      fajr: "06:12",
      jamat_fajr: "",
      soloppgang: "08:34",
      duhur: "12:30",
      asr: "13:10",
      maghrib: "15:31",
      isha: "17:40",
    },
    22: {
      fajr: "06:14",
      jamat_fajr: "",
      soloppgang: "08:36",
      duhur: "12:06",
      asr: "13:09",
      maghrib: "15:29",
      isha: "17:39",
    },
    23: {
      fajr: "06:16",
      jamat_fajr: "",
      soloppgang: "08:39",
      duhur: "12:06",
      asr: "13:08",
      maghrib: "15:27",
      isha: "17:37",
    },
    24: {
      fajr: "06:18",
      jamat_fajr: "",
      soloppgang: "08:41",
      duhur: "12:07",
      asr: "13:07",
      maghrib: "15:25",
      isha: "17:36",
    },
    25: {
      fajr: "06:20",
      jamat_fajr: "",
      soloppgang: "08:43",
      duhur: "12:07",
      asr: "13:06",
      maghrib: "15:23",
      isha: "17:35",
    },
    26: {
      fajr: "06:21",
      jamat_fajr: "",
      soloppgang: "08:46",
      duhur: "12:07",
      asr: "13:05",
      maghrib: "15:22",
      isha: "17:34",
    },
    27: {
      fajr: "06:23",
      jamat_fajr: "",
      soloppgang: "08:48",
      duhur: "12:08",
      asr: "13:04",
      maghrib: "15:20",
      isha: "17:33",
    },
    28: {
      fajr: "06:25",
      jamat_fajr: "",
      soloppgang: "08:50",
      duhur: "12:30",
      asr: "13:06",
      maghrib: "15:18",
      isha: "17:32",
    },
    29: {
      fajr: "06:26",
      jamat_fajr: "",
      soloppgang: "08:53",
      duhur: "12:08",
      asr: "13:02",
      maghrib: "15:17",
      isha: "17:31",
    },
    30: {
      fajr: "06:28",
      jamat_fajr: "",
      soloppgang: "08:55",
      duhur: "12:09",
      asr: "13:01",
      maghrib: "15:15",
      isha: "17:30",
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
