import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "04:19",
      jamat_fajr: "04:56",
      soloppgang: "06:35",
      duhur: "13:30",
      asr: "16:45",
      maghrib: "20:05",
      isha: "22:13",
    },
    2: {
      fajr: "04:18",
      jamat_fajr: "04:53",
      soloppgang: "06:32",
      duhur: "13:30",
      asr: "16:47",
      maghrib: "20:07",
      isha: "21:17",
    },
    3: {
      fajr: "04:18",
      jamat_fajr: "04:51",
      soloppgang: "06:29",
      duhur: "13:30",
      asr: "16:48",
      maghrib: "20:10",
      isha: "22:18",
    },
    4: {
      fajr: "04:18",
      jamat_fajr: "04:47",
      soloppgang: "06:26",
      duhur: "14:00",
      asr: "16:50",
      maghrib: "20:13",
      isha: "22:18",
    },
    5: {
      fajr: "04:17",
      jamat_fajr: "04:42",
      soloppgang: "06:23",
      duhur: "13:30",
      asr: "16:51",
      maghrib: "20:15",
      isha: "22:17",
    },
    6: {
      fajr: "04:17",
      jamat_fajr: "04:42",
      soloppgang: "06:20",
      duhur: "13:30",
      asr: "16:52",
      maghrib: "20:18",
      isha: "22:17",
    },
    7: {
      fajr: "04:17",
      jamat_fajr: "04:42",
      soloppgang: "06:17",
      duhur: "13:30",
      asr: "16:54",
      maghrib: "20:20",
      isha: "22:17",
    },
    8: {
      fajr: "04:17",
      jamat_fajr: "04:42",
      soloppgang: "06:13",
      duhur: "13:30",
      asr: "16:55",
      maghrib: "20:23",
      isha: "22:17",
    },
    9: {
      fajr: "04:16",
      jamat_fajr: "04:36",
      soloppgang: "06:10",
      duhur: "13:30",
      asr: "16:57",
      maghrib: "20:25",
      isha: "22:16",
    },
    10: {
      fajr: "04:16",
      jamat_fajr: "04:36",
      soloppgang: "06:07",
      duhur: "13:30",
      asr: "16:58",
      maghrib: "20:28",
      isha: "22:16",
    },
    11: {
      fajr: "04:16",
      jamat_fajr: "04:36",
      soloppgang: "06:04",
      duhur: "14:00",
      asr: "16:59",
      maghrib: "20:31",
      isha: "22:16",
    },
    12: {
      fajr: "04:16",
      jamat_fajr: "04:35",
      soloppgang: "06:01",
      duhur: "13:30",
      asr: "17:01",
      maghrib: "20:33",
      isha: "22:16",
    },
    13: {
      fajr: "04:15",
      jamat_fajr: "04:30",
      soloppgang: "05:58",
      duhur: "13:30",
      asr: "17:02",
      maghrib: "20:36",
      isha: "22:15",
    },
    14: {
      fajr: "04:15",
      jamat_fajr: "04:30",
      soloppgang: "05:55",
      duhur: "13:30",
      asr: "17:03",
      maghrib: "20:38",
      isha: "22:15",
    },
    15: {
      fajr: "04:15",
      jamat_fajr: "04:30",
      soloppgang: "05:52",
      duhur: "13:30",
      asr: "17:05",
      maghrib: "20:41",
      isha: "22:15",
    },
    16: {
      fajr: "04:15",
      jamat_fajr: "04:30",
      soloppgang: "05:49",
      duhur: "13:30",
      asr: "17:06",
      maghrib: "20:43",
      isha: "22:15",
    },
    17: {
      fajr: "04:14",
      jamat_fajr: "04:29",
      soloppgang: "05:46",
      duhur: "13:30",
      asr: "17:07",
      maghrib: "20:46",
      isha: "22:15",
    },
    18: {
      fajr: "04:14",
      jamat_fajr: "04:29",
      soloppgang: "05:43",
      duhur: "14:00",
      asr: "17:08",
      maghrib: "20:49",
      isha: "22:14",
    },
    19: {
      fajr: "04:14",
      jamat_fajr: "04:29",
      soloppgang: "05:40",
      duhur: "13:30",
      asr: "17:10",
      maghrib: "20:51",
      isha: "22:14",
    },
    20: {
      fajr: "04:14",
      jamat_fajr: "04:29",
      soloppgang: "05:37",
      duhur: "13:30",
      asr: "17:11",
      maghrib: "20:54",
      isha: "22:14",
    },
    21: {
      fajr: "04:14",
      jamat_fajr: "04:28",
      soloppgang: "05:34",
      duhur: "13:30",
      asr: "17:12",
      maghrib: "20:57",
      isha: "22:14",
    },
    22: {
      fajr: "04:13",
      jamat_fajr: "04:28",
      soloppgang: "05:31",
      duhur: "13:30",
      asr: "17:13",
      maghrib: "20:59",
      isha: "22:14",
    },
    23: {
      fajr: "04:13",
      jamat_fajr: "04:28",
      soloppgang: "05:28",
      duhur: "13:30",
      asr: "17:14",
      maghrib: "21:02",
      isha: "22:13",
    },
    24: {
      fajr: "04:13",
      jamat_fajr: "04:25",
      soloppgang: "05:25",
      duhur: "13:30",
      asr: "17:16",
      maghrib: "21:04",
      isha: "22:13",
    },
    25: {
      fajr: "04:13",
      jamat_fajr: "04:25",
      soloppgang: "05:22",
      duhur: "14:00",
      asr: "17:17",
      maghrib: "21:07",
      isha: "22:13",
    },
    26: {
      fajr: "04:13",
      jamat_fajr: "04:25",
      soloppgang: "05:19",
      duhur: "13:30",
      asr: "17:18",
      maghrib: "21:10",
      isha: "22:13",
    },
    27: {
      fajr: "04:12",
      jamat_fajr: "04:22",
      soloppgang: "05:16",
      duhur: "13:30",
      asr: "17:19",
      maghrib: "21:12",
      isha: "22:13",
    },
    28: {
      fajr: "04:12",
      jamat_fajr: "04:22",
      soloppgang: "05:13",
      duhur: "13:30",
      asr: "17:20",
      maghrib: "21:15",
      isha: "22:12",
    },
    29: {
      fajr: "04:12",
      jamat_fajr: "04:22",
      soloppgang: "05:10",
      duhur: "13:30",
      asr: "17:21",
      maghrib: "21:17",
      isha: "22:12",
    },
    30: {
      fajr: "04:12",
      jamat_fajr: "04:22",
      soloppgang: "05:10",
      duhur: "13:30",
      asr: "17:23",
      maghrib: "21:19",
      isha: "22:12",
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
