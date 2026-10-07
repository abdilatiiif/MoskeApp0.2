import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "05:12",
      jamat_fajr: "",
      soloppgang: "07:19",
      duhur: "13:10",
      asr: "15:53",
      maghrib: "18:53",
      isha: "20:46",
    },
    2: {
      fajr: "05:15",
      jamat_fajr: "",
      soloppgang: "07:22",
      duhur: "13:30",
      asr: "15:51",
      maghrib: "18:50",
      isha: "20:42",
    },
    3: {
      fajr: "05:18",
      jamat_fajr: "",
      soloppgang: "07:24",
      duhur: "13:09",
      asr: "15:48",
      maghrib: "18:47",
      isha: "20:39",
    },
    4: {
      fajr: "05:21",
      jamat_fajr: "",
      soloppgang: "07:27",
      duhur: "13:09",
      asr: "15:46",
      maghrib: "18:43",
      isha: "20:36",
    },
    5: {
      fajr: "05:23",
      jamat_fajr: "",
      soloppgang: "07:29",
      duhur: "13:08",
      asr: "15:44",
      maghrib: "18:40",
      isha: "20:33",
    },
    6: {
      fajr: "05:26",
      jamat_fajr: "",
      soloppgang: "07:32",
      duhur: "13:08",
      asr: "15:41",
      maghrib: "18:37",
      isha: "20:29",
    },
    7: {
      fajr: "05:29",
      jamat_fajr: "",
      soloppgang: "07:34",
      duhur: "13:08",
      asr: "15:39",
      maghrib: "18:34",
      isha: "20:26",
    },
    8: {
      fajr: "05:32",
      jamat_fajr: "",
      soloppgang: "07:37",
      duhur: "13:07",
      asr: "15:37",
      maghrib: "18:31",
      isha: "20:23",
    },
    9: {
      fajr: "05:34",
      jamat_fajr: "",
      soloppgang: "07:39",
      duhur: "13:30",
      asr: "15:35",
      maghrib: "18:28",
      isha: "20:20",
    },
    10: {
      fajr: "05:37",
      jamat_fajr: "",
      soloppgang: "07:42",
      duhur: "13:07",
      asr: "15:32",
      maghrib: "18:25",
      isha: "20:17",
    },
    11: {
      fajr: "05:39",
      jamat_fajr: "",
      soloppgang: "07:44",
      duhur: "13:07",
      asr: "15:30",
      maghrib: "18:22",
      isha: "20:14",
    },
    12: {
      fajr: "05:42",
      jamat_fajr: "",
      soloppgang: "07:47",
      duhur: "13:06",
      asr: "15:28",
      maghrib: "18:19",
      isha: "20:11",
    },
    13: {
      fajr: "05:44",
      jamat_fajr: "",
      soloppgang: "07:50",
      duhur: "13:06",
      asr: "15:25",
      maghrib: "18:16",
      isha: "20:08",
    },
    14: {
      fajr: "05:47",
      jamat_fajr: "",
      soloppgang: "07:52",
      duhur: "13:06",
      asr: "15:23",
      maghrib: "18:13",
      isha: "20:05",
    },
    15: {
      fajr: "05:50",
      jamat_fajr: "",
      soloppgang: "07:55",
      duhur: "13:06",
      asr: "15:21",
      maghrib: "18:10",
      isha: "20:02",
    },
    16: {
      fajr: "05:52",
      jamat_fajr: "",
      soloppgang: "07:57",
      duhur: "13:30",
      asr: "15:19",
      maghrib: "18:07",
      isha: "19:59",
    },
    17: {
      fajr: "05:55",
      jamat_fajr: "",
      soloppgang: "08:00",
      duhur: "13:05",
      asr: "15:16",
      maghrib: "18:03",
      isha: "19:56",
    },
    18: {
      fajr: "05:57",
      jamat_fajr: "",
      soloppgang: "08:02",
      duhur: "13:05",
      asr: "15:14",
      maghrib: "18:00",
      isha: "19:53",
    },
    19: {
      fajr: "05:59",
      jamat_fajr: "",
      soloppgang: "08:05",
      duhur: "13:05",
      asr: "15:12",
      maghrib: "17:58",
      isha: "19:50",
    },
    20: {
      fajr: "06:02",
      jamat_fajr: "",
      soloppgang: "08:08",
      duhur: "13:05",
      asr: "15:10",
      maghrib: "17:55",
      isha: "19:48",
    },
    21: {
      fajr: "06:04",
      jamat_fajr: "",
      soloppgang: "08:10",
      duhur: "13:04",
      asr: "15:07",
      maghrib: "17:52",
      isha: "19:45",
    },
    22: {
      fajr: "06:07",
      jamat_fajr: "",
      soloppgang: "08:13",
      duhur: "13:04",
      asr: "15:05",
      maghrib: "17:49",
      isha: "19:42",
    },
    23: {
      fajr: "06:09",
      jamat_fajr: "",
      soloppgang: "08:16",
      duhur: "13:30",
      asr: "15:03",
      maghrib: "17:46",
      isha: "19:39",
    },
    24: {
      fajr: "06:12",
      jamat_fajr: "",
      soloppgang: "08:18",
      duhur: "13:04",
      asr: "15:01",
      maghrib: "17:43",
      isha: "19:37",
    },
    25: {
      fajr: "06:14",
      jamat_fajr: "",
      soloppgang: "07:21",
      duhur: "12:04",
      asr: "13:59",
      maghrib: "16:40",
      isha: "18:34",
    },
    26: {
      fajr: "06:16",
      jamat_fajr: "",
      soloppgang: "07:24",
      duhur: "12:04",
      asr: "13:56",
      maghrib: "16:37",
      isha: "18:32",
    },
    27: {
      fajr: "06:19",
      jamat_fajr: "",
      soloppgang: "07:26",
      duhur: "12:04",
      asr: "13:54",
      maghrib: "16:34",
      isha: "18:29",
    },
    28: {
      fajr: "06:21",
      jamat_fajr: "",
      soloppgang: "07:29",
      duhur: "12:04",
      asr: "13:52",
      maghrib: "16:31",
      isha: "18:27",
    },
    29: {
      fajr: "06:23",
      jamat_fajr: "",
      soloppgang: "07:32",
      duhur: "12:04",
      asr: "13:50",
      maghrib: "16:28",
      isha: "18:24",
    },
    30: {
      fajr: "06:26",
      jamat_fajr: "",
      soloppgang: "07:34",
      duhur: "13:00",
      asr: "13:48",
      maghrib: "16:26",
      isha: "18:22",
    },
    31: {
      fajr: "06:28",
      jamat_fajr: "",
      soloppgang: "07:37",
      duhur: "12:03",
      asr: "13:46",
      maghrib: "16:23",
      isha: "18:20",
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
