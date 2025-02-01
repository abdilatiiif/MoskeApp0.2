import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "06:19",
      jamat_fajr: "6:45",
      soloppgang: "8:30",
      duhur: "12:33",
      asr: "14:26",
      maghrib: "16:28",
      isha: "18:31",
    },
    2: {
      fajr: "06:17",
      jamat_fajr: "6:42",
      soloppgang: "8:27",
      duhur: "12:34",
      asr: "14:27",
      maghrib: "16:31",
      isha: "18:33",
    },
    3: {
      fajr: "06:15",
      jamat_fajr: "6:39",
      soloppgang: "8:25",
      duhur: "12:34",
      asr: "14:29",
      maghrib: "16:34",
      isha: "18:35",
    },
    4: {
      fajr: "06:13",
      jamat_fajr: "6:37",
      soloppgang: "8:23",
      duhur: "12:34",
      asr: "14:30",
      maghrib: "16:37",
      isha: "18:38",
    },
    5: {
      fajr: "06:11",
      jamat_fajr: "6:34",
      soloppgang: "8:20",
      duhur: "12:34",
      asr: "14:32",
      maghrib: "16:40",
      isha: "18:40",
    },
    6: {
      fajr: "06:09",
      jamat_fajr: "6:31",
      soloppgang: "8:18",
      duhur: "12:34",
      asr: "14:33",
      maghrib: "16:42",
      isha: "18:42",
    },
    7: {
      fajr: "06:06",
      jamat_fajr: "6:28",
      soloppgang: "8:15",
      duhur: "13:00",
      asr: "14:35",
      maghrib: "16:45",
      isha: "18:44",
    },
    8: {
      fajr: "06:04",
      jamat_fajr: "6:25",
      soloppgang: "8:13",
      duhur: "12:34",
      asr: "14:36",
      maghrib: "16:48",
      isha: "18:47",
    },
    9: {
      fajr: "06:02",
      jamat_fajr: "6:22",
      soloppgang: "8:10",
      duhur: "12:34",
      asr: "14:37",
      maghrib: "16:51",
      isha: "18:49",
    },
    10: {
      fajr: "06:00",
      jamat_fajr: "6:19",
      soloppgang: "8:08",
      duhur: "12:34",
      asr: "14:39",
      maghrib: "16:53",
      isha: "18:51",
    },
    11: {
      fajr: "05:57",
      jamat_fajr: "6:16",
      soloppgang: "8:05",
      duhur: "12:34",
      asr: "14:40",
      maghrib: "16:56",
      isha: "18:54",
    },
    12: {
      fajr: "05:55",
      jamat_fajr: "6:13",
      soloppgang: "8:02",
      duhur: "12:34",
      asr: "14:42",
      maghrib: "16:59",
      isha: "18:56",
    },
    13: {
      fajr: "05:53",
      jamat_fajr: "6:10",
      soloppgang: "7:59",
      duhur: "12:34",
      asr: "14:43",
      maghrib: "17:02",
      isha: "18:59",
    },
    14: {
      fajr: "05:50",
      jamat_fajr: "6:08",
      soloppgang: "7:57",
      duhur: "13:00",
      asr: "14:44",
      maghrib: "17:04",
      isha: "19:01",
    },
    15: {
      fajr: "05:48",
      jamat_fajr: "6:06",
      soloppgang: "7:54",
      duhur: "12:34",
      asr: "14:46",
      maghrib: "17:07",
      isha: "19:03",
    },
    16: {
      fajr: "05:45",
      jamat_fajr: "6:03",
      soloppgang: "7:52",
      duhur: "12:34",
      asr: "14:47",
      maghrib: "17:10",
      isha: "19:06",
    },
    17: {
      fajr: "05:42",
      jamat_fajr: "6:01",
      soloppgang: "7:49",
      duhur: "12:34",
      asr: "14:48",
      maghrib: "17:13",
      isha: "19:08",
    },
    18: {
      fajr: "05:40",
      jamat_fajr: "5:58",
      soloppgang: "7:46",
      duhur: "12:34",
      asr: "14:50",
      maghrib: "17:15",
      isha: "19:11",
    },
    19: {
      fajr: "05:37",
      jamat_fajr: "5:55",
      soloppgang: "7:43",
      duhur: "12:34",
      asr: "14:51",
      maghrib: "17:18",
      isha: "19:13",
    },
    20: {
      fajr: "05:35",
      jamat_fajr: "5:52",
      soloppgang: "7:41",
      duhur: "12:34",
      asr: "14:52",
      maghrib: "17:21",
      isha: "19:16",
    },
    21: {
      fajr: "05:32",
      jamat_fajr: "5:50",
      soloppgang: "7:38",
      duhur: "13:00",
      asr: "14:54",
      maghrib: "17:24",
      isha: "19:18",
    },
    22: {
      fajr: "05:29",
      jamat_fajr: "5:47",
      soloppgang: "7:35",
      duhur: "12:33",
      asr: "14:55",
      maghrib: "17:26",
      isha: "19:21",
    },
    23: {
      fajr: "05:26",
      jamat_fajr: "5:44",
      soloppgang: "7:32",
      duhur: "12:33",
      asr: "14:56",
      maghrib: "17:29",
      isha: "19:23",
    },
    24: {
      fajr: "05:23",
      jamat_fajr: "5:41",
      soloppgang: "7:29",
      duhur: "12:33",
      asr: "14:57",
      maghrib: "17:32",
      isha: "19:26",
    },
    25: {
      fajr: "05:21",
      jamat_fajr: "5:38",
      soloppgang: "7:26",
      duhur: "12:33",
      asr: "14:59",
      maghrib: "17:34",
      isha: "19:28",
    },
    26: {
      fajr: "05:18",
      jamat_fajr: "5:35",
      soloppgang: "7:24",
      duhur: "12:33",
      asr: "15:00",
      maghrib: "17:37",
      isha: "19:31",
    },
    27: {
      fajr: "05:15",
      jamat_fajr: "5:32",
      soloppgang: "7:21",
      duhur: "12:33",
      asr: "15:01",
      maghrib: "17:40",
      isha: "19:34",
    },
    28: {
      fajr: "05:12",
      jamat_fajr: "5:28",
      soloppgang: "7:18",
      duhur: "13:00",
      asr: "15:02",
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
