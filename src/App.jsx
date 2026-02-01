import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "06:19",
      jamat_fajr: "",
      soloppgang: "08:32",
      duhur: "12:33",
      asr: "13:58",
      maghrib: "16:28",
      isha: "18:30",
    },
    2: {
      fajr: "06:17",
      jamat_fajr: "",
      soloppgang: "08:30",
      duhur: "12:34",
      asr: "14:00",
      maghrib: "16:31",
      isha: "18:33",
    },
    3: {
      fajr: "06:15",
      jamat_fajr: "",
      soloppgang: "08:27",
      duhur: "12:34",
      asr: "14:02",
      maghrib: "16:33",
      isha: "18:35",
    },
    4: {
      fajr: "06:13",
      jamat_fajr: "",
      soloppgang: "08:24",
      duhur: "12:34",
      asr: "14:04",
      maghrib: "16:36",
      isha: "18:37",
    },
    5: {
      fajr: "06:11",
      jamat_fajr: "",
      soloppgang: "08:22",
      duhur: "12:34",
      asr: "14:06",
      maghrib: "16:39",
      isha: "18:39",
    },
    6: {
      fajr: "06:09",
      jamat_fajr: "",
      soloppgang: "08:19",
      duhur: "13:00",
      asr: "14:08",
      maghrib: "16:42",
      isha: "18:42",
    },
    7: {
      fajr: "06:07",
      jamat_fajr: "",
      soloppgang: "08:17",
      duhur: "12:34",
      asr: "14:10",
      maghrib: "16:44",
      isha: "18:44",
    },
    8: {
      fajr: "06:05",
      jamat_fajr: "",
      soloppgang: "08:14",
      duhur: "12:34",
      asr: "14:12",
      maghrib: "16:47",
      isha: "18:46",
    },
    9: {
      fajr: "06:03",
      jamat_fajr: "",
      soloppgang: "08:11",
      duhur: "12:34",
      asr: "14:14",
      maghrib: "16:50",
      isha: "18:49",
    },
    10: {
      fajr: "06:00",
      jamat_fajr: "",
      soloppgang: "08:08",
      duhur: "12:34",
      asr: "14:16",
      maghrib: "16:53",
      isha: "18:51",
    },
    11: {
      fajr: "05:58",
      jamat_fajr: "",
      soloppgang: "08:06",
      duhur: "12:34",
      asr: "14:18",
      maghrib: "16:56",
      isha: "18:53",
    },
    12: {
      fajr: "05:56",
      jamat_fajr: "",
      soloppgang: "08:03",
      duhur: "12:34",
      asr: "14:20",
      maghrib: "16:58",
      isha: "18:56",
    },
    13: {
      fajr: "05:53",
      jamat_fajr: "",
      soloppgang: "08:00",
      duhur: "13:00",
      asr: "14:22",
      maghrib: "17:01",
      isha: "18:58",
    },
    14: {
      fajr: "05:51",
      jamat_fajr: "",
      soloppgang: "07:57",
      duhur: "12:34",
      asr: "14:24",
      maghrib: "17:04",
      isha: "19:00",
    },
    15: {
      fajr: "05:48",
      jamat_fajr: "",
      soloppgang: "07:54",
      duhur: "12:34",
      asr: "14:26",
      maghrib: "17:07",
      isha: "19:03",
    },
    16: {
      fajr: "05:46",
      jamat_fajr: "",
      soloppgang: "07:52",
      duhur: "12:34",
      asr: "14:28",
      maghrib: "17:09",
      isha: "19:05",
    },
    17: {
      fajr: "05:43",
      jamat_fajr: "",
      soloppgang: "07:49",
      duhur: "12:34",
      asr: "14:30",
      maghrib: "17:12",
      isha: "19:08",
    },
    18: {
      fajr: "05:41",
      jamat_fajr: "",
      soloppgang: "07:46",
      duhur: "12:34",
      asr: "14:32",
      maghrib: "17:15",
      isha: "19:10",
    },
    19: {
      fajr: "05:38",
      jamat_fajr: "",
      soloppgang: "07:43",
      duhur: "12:34",
      asr: "14:34",
      maghrib: "17:18",
      isha: "19:13",
    },
    20: {
      fajr: "05:35",
      jamat_fajr: "",
      soloppgang: "07:40",
      duhur: "13:00",
      asr: "14:36",
      maghrib: "17:20",
      isha: "19:15",
    },
    21: {
      fajr: "05:32",
      jamat_fajr: "",
      soloppgang: "07:37",
      duhur: "12:33",
      asr: "14:38",
      maghrib: "17:23",
      isha: "19:18",
    },
    22: {
      fajr: "05:30",
      jamat_fajr: "",
      soloppgang: "07:34",
      duhur: "12:33",
      asr: "14:40",
      maghrib: "17:26",
      isha: "19:20",
    },
    23: {
      fajr: "05:27",
      jamat_fajr: "",
      soloppgang: "07:31",
      duhur: "12:33",
      asr: "14:42",
      maghrib: "17:28",
      isha: "19:23",
    },
    24: {
      fajr: "05:24",
      jamat_fajr: "",
      soloppgang: "07:28",
      duhur: "12:33",
      asr: "14:44",
      maghrib: "17:31",
      isha: "19:25",
    },
    25: {
      fajr: "05:21",
      jamat_fajr: "",
      soloppgang: "07:25",
      duhur: "12:33",
      asr: "14:46",
      maghrib: "17:34",
      isha: "19:28",
    },
    26: {
      fajr: "05:18",
      jamat_fajr: "",
      soloppgang: "07:22",
      duhur: "12:33",
      asr: "14:48",
      maghrib: "17:36",
      isha: "19:30",
    },
    27: {
      fajr: "05:15",
      jamat_fajr: "",
      soloppgang: "07:19",
      duhur: "13:00",
      asr: "14:50",
      maghrib: "17:39",
      isha: "19:33",
    },
    28: {
      fajr: "05:12",
      jamat_fajr: "",
      soloppgang: "07:16",
      duhur: "12:32",
      asr: "14:52",
      maghrib: "17:42",
      isha: "19:36",
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
