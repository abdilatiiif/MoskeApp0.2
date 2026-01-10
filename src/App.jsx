import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "06:52",
      jamat_fajr: "",
      soloppgang: "09:25",
      duhur: "12:23",
      asr: "13:07",
      maghrib: "15:15",
      isha: "17:36",
    },
    2: {
      fajr: "06:52",
      jamat_fajr: "",
      soloppgang: "09:24",
      duhur: "12:30",
      asr: "13:08",
      maghrib: "15:17",
      isha: "17:37",
    },
    3: {
      fajr: "06:52",
      jamat_fajr: "",
      soloppgang: "09:23",
      duhur: "12:24",
      asr: "13:09",
      maghrib: "15:18",
      isha: "17:38",
    },
    4: {
      fajr: "06:52",
      jamat_fajr: "",
      soloppgang: "09:23",
      duhur: "12:25",
      asr: "13:10",
      maghrib: "15:20",
      isha: "17:39",
    },
    5: {
      fajr: "06:51",
      jamat_fajr: "",
      soloppgang: "09:22",
      duhur: "12:25",
      asr: "13:12",
      maghrib: "15:22",
      isha: "17:41",
    },
    6: {
      fajr: "06:51",
      jamat_fajr: "",
      soloppgang: "09:21",
      duhur: "12:26",
      asr: "13:13",
      maghrib: "15:24",
      isha: "17:42",
    },
    7: {
      fajr: "06:50",
      jamat_fajr: "",
      soloppgang: "09:20",
      duhur: "12:26",
      asr: "13:14",
      maghrib: "15:26",
      isha: "17:44",
    },
    8: {
      fajr: "06:50",
      jamat_fajr: "",
      soloppgang: "09:19",
      duhur: "12:27",
      asr: "13:16",
      maghrib: "15:28",
      isha: "17:45",
    },
    9: {
      fajr: "06:49",
      jamat_fajr: "",
      soloppgang: "09:17",
      duhur: "12:30",
      asr: "13:17",
      maghrib: "15:30",
      isha: "17:46",
    },
    10: {
      fajr: "06:49",
      jamat_fajr: "",
      soloppgang: "09:16",
      duhur: "12:27",
      asr: "13:19",
      maghrib: "15:32",
      isha: "17:48",
    },
    11: {
      fajr: "06:48",
      jamat_fajr: "",
      soloppgang: "09:15",
      duhur: "12:28",
      asr: "13:20",
      maghrib: "15:34",
      isha: "17:50",
    },
    12: {
      fajr: "06:47",
      jamat_fajr: "",
      soloppgang: "09:13",
      duhur: "12:28",
      asr: "13:22",
      maghrib: "15:36",
      isha: "17:51",
    },
    13: {
      fajr: "06:46",
      jamat_fajr: "",
      soloppgang: "09:12",
      duhur: "12:29",
      asr: "13:23",
      maghrib: "15:38",
      isha: "17:53",
    },
    14: {
      fajr: "06:45",
      jamat_fajr: "",
      soloppgang: "09:10",
      duhur: "12:29",
      asr: "13:25",
      maghrib: "15:41",
      isha: "17:55",
    },
    15: {
      fajr: "06:44",
      jamat_fajr: "",
      soloppgang: "09:08",
      duhur: "12:29",
      asr: "13:26",
      maghrib: "15:43",
      isha: "17:56",
    },
    16: {
      fajr: "06:43",
      jamat_fajr: "",
      soloppgang: "09:07",
      duhur: "12:30",
      asr: "13:28",
      maghrib: "15:45",
      isha: "17:58",
    },
    17: {
      fajr: "06:42",
      jamat_fajr: "",
      soloppgang: "09:05",
      duhur: "12:30",
      asr: "13:30",
      maghrib: "15:48",
      isha: "18:00",
    },
    18: {
      fajr: "06:41",
      jamat_fajr: "",
      soloppgang: "09:03",
      duhur: "12:30",
      asr: "13:32",
      maghrib: "15:50",
      isha: "18:02",
    },
    19: {
      fajr: "06:40",
      jamat_fajr: "",
      soloppgang: "09:01",
      duhur: "12:31",
      asr: "13:33",
      maghrib: "15:53",
      isha: "18:04",
    },
    20: {
      fajr: "06:39",
      jamat_fajr: "",
      soloppgang: "08:59",
      duhur: "12:31",
      asr: "13:35",
      maghrib: "15:56",
      isha: "18:05",
    },
    21: {
      fajr: "06:37",
      jamat_fajr: "",
      soloppgang: "08:57",
      duhur: "12:31",
      asr: "13:37",
      maghrib: "15:58",
      isha: "18:07",
    },
    22: {
      fajr: "06:36",
      jamat_fajr: "",
      soloppgang: "08:55",
      duhur: "12:31",
      asr: "13:39",
      maghrib: "16:01",
      isha: "18:09",
    },
    23: {
      fajr: "06:34",
      jamat_fajr: "",
      soloppgang: "08:53",
      duhur: "12:30",
      asr: "13:41",
      maghrib: "16:03",
      isha: "18:11",
    },
    24: {
      fajr: "06:33",
      jamat_fajr: "",
      soloppgang: "08:51",
      duhur: "12:32",
      asr: "13:43",
      maghrib: "16:06",
      isha: "18:13",
    },
    25: {
      fajr: "06:31",
      jamat_fajr: "",
      soloppgang: "08:49",
      duhur: "12:32",
      asr: "13:44",
      maghrib: "16:09",
      isha: "18:15",
    },
    26: {
      fajr: "06:30",
      jamat_fajr: "",
      soloppgang: "08:46",
      duhur: "12:32",
      asr: "13:46",
      maghrib: "16:11",
      isha: "18:17",
    },
    27: {
      fajr: "06:28",
      jamat_fajr: "",
      soloppgang: "08:44",
      duhur: "12:33",
      asr: "13:48",
      maghrib: "16:14",
      isha: "18:20",
    },
    28: {
      fajr: "06:26",
      jamat_fajr: "",
      soloppgang: "08:42",
      duhur: "12:33",
      asr: "13:50",
      maghrib: "16:17",
      isha: "18:22",
    },
    29: {
      fajr: "06:25",
      jamat_fajr: "",
      soloppgang: "08:39",
      duhur: "12:33",
      asr: "13:52",
      maghrib: "16:20",
      isha: "18:24",
    },
    30: {
      fajr: "06:23",
      jamat_fajr: "",
      soloppgang: "08:37",
      duhur: "12:30",
      asr: "13:54",
      maghrib: "16:22",
      isha: "18:26",
    },
    31: {
      fajr: "06:21",
      jamat_fajr: "",
      soloppgang: "08:35",
      duhur: "12:33",
      asr: "13:56",
      maghrib: "16:25",
      isha: "18:28",
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
