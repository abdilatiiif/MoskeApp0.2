import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "06:52",
      jamat_fajr: "07:32",
      soloppgang: "09:25",
      duhur: "12:25",
      asr: "13:44",
      maghrib: "15:15",
      isha: "17:36",
    },
    2: {
      fajr: "06:52",
      jamat_fajr: "07:32",
      soloppgang: "09:24",
      duhur: "12:25",
      asr: "13:45",
      maghrib: "15:17",
      isha: "17:37",
    },
    3: {
      fajr: "06:52",
      jamat_fajr: "07:32",
      soloppgang: "09:23",
      duhur: "12:30",
      asr: "13:47",
      maghrib: "15:19",
      isha: "17:39",
    },
    4: {
      fajr: "06:52",
      jamat_fajr: "07:31",
      soloppgang: "09:22",
      duhur: "12:25",
      asr: "13:48",
      maghrib: "15:20",
      isha: "17:40",
    },
    5: {
      fajr: "06:51",
      jamat_fajr: "07:31",
      soloppgang: "09:22",
      duhur: "12:25",
      asr: "13:49",
      maghrib: "15:22",
      isha: "17:41",
    },
    6: {
      fajr: "06:51",
      jamat_fajr: "07:30",
      soloppgang: "09:21",
      duhur: "12:30",
      asr: "13:50",
      maghrib: "15:24",
      isha: "17:42",
    },
    7: {
      fajr: "06:50",
      jamat_fajr: "07:29",
      soloppgang: "09:19",
      duhur: "12:30",
      asr: "13:51",
      maghrib: "15:26",
      isha: "17:44",
    },
    8: {
      fajr: "06:50",
      jamat_fajr: "07:28",
      soloppgang: "09:18",
      duhur: "12:30",
      asr: "13:52",
      maghrib: "15:28",
      isha: "17:45",
    },
    9: {
      fajr: "06:49",
      jamat_fajr: "07:27",
      soloppgang: "09:17",
      duhur: "12:30",
      asr: "13:54",
      maghrib: "15:30",
      isha: "17:47",
    },
    10: {
      fajr: "06:48",
      jamat_fajr: "07:26",
      soloppgang: "09:16",
      duhur: "12:30",
      asr: "13:55",
      maghrib: "15:32",
      isha: "17:48",
    },
    11: {
      fajr: "06:48",
      jamat_fajr: "07:25",
      soloppgang: "09:14",
      duhur: "12:30",
      asr: "13:56",
      maghrib: "15:34",
      isha: "17:50",
    },
    12: {
      fajr: "06:47",
      jamat_fajr: "07:24",
      soloppgang: "09:13",
      duhur: "12:30",
      asr: "13:57",
      maghrib: "15:37",
      isha: "17:52",
    },
    13: {
      fajr: "06:46",
      jamat_fajr: "07:23",
      soloppgang: "09:11",
      duhur: "12:30",
      asr: "13:59",
      maghrib: "15:39",
      isha: "17:53",
    },
    14: {
      fajr: "06:45",
      jamat_fajr: "07:21",
      soloppgang: "09:10",
      duhur: "12:30",
      asr: "14:00",
      maghrib: "15:41",
      isha: "17:55",
    },
    15: {
      fajr: "06:44",
      jamat_fajr: "07:20",
      soloppgang: "09:08",
      duhur: "12:30",
      asr: "14:01",
      maghrib: "15:44",
      isha: "17:57",
    },
    16: {
      fajr: "06:43",
      jamat_fajr: "07:19",
      soloppgang: "09:06",
      duhur: "12:30",
      asr: "14:03",
      maghrib: "15:46",
      isha: "17:58",
    },
    17: {
      fajr: "06:42",
      jamat_fajr: "07:17",
      soloppgang: "09:04",
      duhur: "13:00",
      asr: "14:04",
      maghrib: "15:49",
      isha: "18:00",
    },
    18: {
      fajr: "06:41",
      jamat_fajr: "07:16",
      soloppgang: "09:03",
      duhur: "12:30",
      asr: "14:06",
      maghrib: "15:51",
      isha: "18:02",
    },
    19: {
      fajr: "06:39",
      jamat_fajr: "07:14",
      soloppgang: "09:01",
      duhur: "12:30",
      asr: "14:07",
      maghrib: "15:54",
      isha: "18:04",
    },
    20: {
      fajr: "06:38",
      jamat_fajr: "07:12",
      soloppgang: "08:59",
      duhur: "12:35",
      asr: "14:09",
      maghrib: "15:56",
      isha: "18:06",
    },
    21: {
      fajr: "06:37",
      jamat_fajr: "07:11",
      soloppgang: "08:57",
      duhur: "12:35",
      asr: "14:10",
      maghrib: "15:59",
      isha: "18:08",
    },
    22: {
      fajr: "06:35",
      jamat_fajr: "07:09",
      soloppgang: "08:55",
      duhur: "12:35",
      asr: "14:11",
      maghrib: "16:01",
      isha: "18:10",
    },
    23: {
      fajr: "06:34",
      jamat_fajr: "07:07",
      soloppgang: "08:52",
      duhur: "12:35",
      asr: "14:13",
      maghrib: "16:04",
      isha: "18:12",
    },
    24: {
      fajr: "06:33",
      jamat_fajr: "07:05",
      soloppgang: "08:50",
      duhur: "13:00",
      asr: "14:14",
      maghrib: "16:07",
      isha: "18:14",
    },
    25: {
      fajr: "06:31",
      jamat_fajr: "07:03",
      soloppgang: "08:48",
      duhur: "12:35",
      asr: "14:16",
      maghrib: "16:09",
      isha: "18:16",
    },
    26: {
      fajr: "06:29",
      jamat_fajr: "07:01",
      soloppgang: "08:46",
      duhur: "12:35",
      asr: "14:17",
      maghrib: "16:12",
      isha: "18:18",
    },
    27: {
      fajr: "06:28",
      jamat_fajr: "06:59",
      soloppgang: "08:44",
      duhur: "12:35",
      asr: "14:19",
      maghrib: "16:15",
      isha: "18:20",
    },
    28: {
      fajr: "06:26",
      jamat_fajr: "06:57",
      soloppgang: "08:41",
      duhur: "12:35",
      asr: "14:20",
      maghrib: "16:17",
      isha: "18:22",
    },
    29: {
      fajr: "06:24",
      jamat_fajr: "06:55",
      soloppgang: "08:39",
      duhur: "12:35",
      asr: "14:22",
      maghrib: "16:20",
      isha: "18:24",
    },
    30: {
      fajr: "06:23",
      jamat_fajr: "06:53",
      soloppgang: "08:36",
      duhur: "12:35",
      asr: "14:23",
      maghrib: "16:23",
      isha: "18:26",
    },
    31: {
      fajr: "06:21",
      jamat_fajr: "06:51",
      soloppgang: "08:34",
      duhur: "13:00",
      asr: "14:25",
      maghrib: "16:26",
      isha: "18:29",
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
