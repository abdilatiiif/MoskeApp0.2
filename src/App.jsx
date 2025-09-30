import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "05:13",
      jamat_fajr: "",
      soloppgang: "07:20",
      duhur: "13:09",
      asr: "15:52",
      maghrib: "18:52",
      isha: "20:45",
    },
    2: {
      fajr: "05:16",
      jamat_fajr: "",
      soloppgang: "07:22",
      duhur: "13:09",
      asr: "15:50",
      maghrib: "18:49",
      isha: "20:42",
    },
    3: {
      fajr: "05:19",
      jamat_fajr: "",
      soloppgang: "07:25",
      duhur: "14:00",
      asr: "15:48",
      maghrib: "18:46",
      isha: "20:38",
    },
    4: {
      fajr: "05:21",
      jamat_fajr: "",
      soloppgang: "07:27",
      duhur: "13:09",
      asr: "15:45",
      maghrib: "18:43",
      isha: "20:35",
    },
    5: {
      fajr: "05:24",
      jamat_fajr: "",
      soloppgang: "07:30",
      duhur: "13:08",
      asr: "15:43",
      maghrib: "18:40",
      isha: "20:32",
    },
    6: {
      fajr: "05:27",
      jamat_fajr: "",
      soloppgang: "07:32",
      duhur: "13:08",
      asr: "15:41",
      maghrib: "18:36",
      isha: "20:29",
    },
    7: {
      fajr: "05:29",
      jamat_fajr: "",
      soloppgang: "07:35",
      duhur: "13:08",
      asr: "15:39",
      maghrib: "18:33",
      isha: "20:25",
    },
    8: {
      fajr: "05:32",
      jamat_fajr: "",
      soloppgang: "07:37",
      duhur: "13:07",
      asr: "15:36",
      maghrib: "18:30",
      isha: "20:22",
    },
    9: {
      fajr: "05:35",
      jamat_fajr: "",
      soloppgang: "07:40",
      duhur: "13:07",
      asr: "15:34",
      maghrib: "18:27",
      isha: "20:19",
    },
    10: {
      fajr: "05:37",
      jamat_fajr: "",
      soloppgang: "07:43",
      duhur: "14:00",
      asr: "15:32",
      maghrib: "18:24",
      isha: "20:16",
    },
    11: {
      fajr: "05:40",
      jamat_fajr: "",
      soloppgang: "07:45",
      duhur: "13:07",
      asr: "15:29",
      maghrib: "18:21",
      isha: "20:13",
    },
    12: {
      fajr: "05:43",
      jamat_fajr: "",
      soloppgang: "07:48",
      duhur: "13:06",
      asr: "15:27",
      maghrib: "18:18",
      isha: "20:10",
    },
    13: {
      fajr: "05:45",
      jamat_fajr: "",
      soloppgang: "07:50",
      duhur: "13:06",
      asr: "15:25",
      maghrib: "18:15",
      isha: "20:07",
    },
    14: {
      fajr: "05:48",
      jamat_fajr: "",
      soloppgang: "07:53",
      duhur: "13:06",
      asr: "15:23",
      maghrib: "18:12",
      isha: "20:04",
    },
    15: {
      fajr: "05:50",
      jamat_fajr: "",
      soloppgang: "07:55",
      duhur: "13:06",
      asr: "15:20",
      maghrib: "18:09",
      isha: "20:01",
    },
    16: {
      fajr: "05:53",
      jamat_fajr: "",
      soloppgang: "07:58",
      duhur: "13:05",
      asr: "15:18",
      maghrib: "18:06",
      isha: "19:58",
    },
    17: {
      fajr: "05:55",
      jamat_fajr: "",
      soloppgang: "08:01",
      duhur: "14:00",
      asr: "15:16",
      maghrib: "18:03",
      isha: "19:55",
    },
    18: {
      fajr: "05:58",
      jamat_fajr: "",
      soloppgang: "08:03",
      duhur: "13:05",
      asr: "15:14",
      maghrib: "18:00",
      isha: "19:52",
    },
    19: {
      fajr: "06:00",
      jamat_fajr: "",
      soloppgang: "08:06",
      duhur: "13:05",
      asr: "15:11",
      maghrib: "17:57",
      isha: "19:50",
    },
    20: {
      fajr: "06:02",
      jamat_fajr: "",
      soloppgang: "08:08",
      duhur: "13:05",
      asr: "15:09",
      maghrib: "17:54",
      isha: "19:47",
    },
    21: {
      fajr: "06:05",
      jamat_fajr: "",
      soloppgang: "08:11",
      duhur: "13:04",
      asr: "15:07",
      maghrib: "17:51",
      isha: "19:44",
    },
    22: {
      fajr: "06:07",
      jamat_fajr: "",
      soloppgang: "08:14",
      duhur: "13:04",
      asr: "15:05",
      maghrib: "17:48",
      isha: "19:41",
    },
    23: {
      fajr: "06:10",
      jamat_fajr: "",
      soloppgang: "08:16",
      duhur: "13:04",
      asr: "15:03",
      maghrib: "17:45",
      isha: "19:39",
    },
    24: {
      fajr: "06:12",
      jamat_fajr: "",
      soloppgang: "08:19",
      duhur: "13:30",
      asr: "15:00",
      maghrib: "17:42",
      isha: "19:36",
    },
    25: {
      fajr: "06:14",
      jamat_fajr: "",
      soloppgang: "08:22",
      duhur: "13:04",
      asr: "14:58",
      maghrib: "17:39",
      isha: "19:34",
    },
    26: {
      fajr: "05:17",
      jamat_fajr: "",
      soloppgang: "07:24",
      duhur: "12:04",
      asr: "14:31",
      maghrib: "16:36",
      isha: "18:31",
    },
    27: {
      fajr: "05:19",
      jamat_fajr: "",
      soloppgang: "07:27",
      duhur: "12:04",
      asr: "14:28",
      maghrib: "16:33",
      isha: "18:29",
    },
    28: {
      fajr: "05:21",
      jamat_fajr: "",
      soloppgang: "07:30",
      duhur: "12:04",
      asr: "14:25",
      maghrib: "16:30",
      isha: "18:26",
    },
    29: {
      fajr: "05:24",
      jamat_fajr: "",
      soloppgang: "07:32",
      duhur: "12:04",
      asr: "14:23",
      maghrib: "16:28",
      isha: "18:24",
    },
    30: {
      fajr: "05:26",
      jamat_fajr: "",
      soloppgang: "07:35",
      duhur: "12:03",
      asr: "14:20",
      maghrib: "16:25",
      isha: "18:21",
    },
    31: {
      fajr: "05:28",
      jamat_fajr: "",
      soloppgang: "07:38",
      duhur: "12:03",
      asr: "14:18",
      maghrib: "16:22",
      isha: "18:19",
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
