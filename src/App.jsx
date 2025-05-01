import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "03:43",
      jamat_fajr: "03:53",
      soloppgang: "05:04",
      duhur: "13:30",
      asr: "17:24",
      maghrib: "21:23",
      isha: "22:41",
    },
    2: {
      fajr: "03:43",
      jamat_fajr: "03:53",
      soloppgang: "05:01",
      duhur: "14:00",
      asr: "17:25",
      maghrib: "21:25",
      isha: "22:42",
    },
    3: {
      fajr: "03:43",
      jamat_fajr: "03:53",
      soloppgang: "04:58",
      duhur: "13:30",
      asr: "17:26",
      maghrib: "21:28",
      isha: "22:43",
    },
    4: {
      fajr: "03:43",
      jamat_fajr: "03:53",
      soloppgang: "04:56",
      duhur: "13:30",
      asr: "17:27",
      maghrib: "21:31",
      isha: "22:44",
    },
    5: {
      fajr: "03:43",
      jamat_fajr: "03:53",
      soloppgang: "04:53",
      duhur: "13:30",
      asr: "17:28",
      maghrib: "21:33",
      isha: "22:45",
    },
    6: {
      fajr: "03:43",
      jamat_fajr: "03:53",
      soloppgang: "04:50",
      duhur: "13:30",
      asr: "17:29",
      maghrib: "21:36",
      isha: "22:47",
    },
    7: {
      fajr: "03:43",
      jamat_fajr: "03:53",
      soloppgang: "04:47",
      duhur: "13:30",
      asr: "17:30",
      maghrib: "21:38",
      isha: "22:48",
    },
    8: {
      fajr: "03:43",
      jamat_fajr: "03:53",
      soloppgang: "04:45",
      duhur: "13:30",
      asr: "17:31",
      maghrib: "21:41",
      isha: "22:49",
    },
    9: {
      fajr: "03:43",
      jamat_fajr: "03:53",
      soloppgang: "04:42",
      duhur: "14:00",
      asr: "17:32",
      maghrib: "21:44",
      isha: "22:50",
    },
    10: {
      fajr: "03:41",
      jamat_fajr: "03:51",
      soloppgang: "04:39",
      duhur: "13:30",
      asr: "17:33",
      maghrib: "21:46",
      isha: "22:51",
    },
    11: {
      fajr: "03:39",
      jamat_fajr: "03:49",
      soloppgang: "04:37",
      duhur: "13:30",
      asr: "17:34",
      maghrib: "21:49",
      isha: "22:52",
    },
    12: {
      fajr: "03:36",
      jamat_fajr: "03:46",
      soloppgang: "04:34",
      duhur: "13:30",
      asr: "17:35",
      maghrib: "21:51",
      isha: "22:53",
    },
    13: {
      fajr: "03:33",
      jamat_fajr: "03:43",
      soloppgang: "04:31",
      duhur: "13:30",
      asr: "17:36",
      maghrib: "21:54",
      isha: "22:55",
    },
    14: {
      fajr: "03:31",
      jamat_fajr: "03:41",
      soloppgang: "04:29",
      duhur: "13:30",
      asr: "17:37",
      maghrib: "21:56",
      isha: "22:56",
    },
    15: {
      fajr: "03:28",
      jamat_fajr: "03:38",
      soloppgang: "04:26",
      duhur: "13:30",
      asr: "17:38",
      maghrib: "21:59",
      isha: "22:57",
    },
    16: {
      fajr: "03:26",
      jamat_fajr: "03:36",
      soloppgang: "04:24",
      duhur: "14:00",
      asr: "17:39",
      maghrib: "22:02",
      isha: "22:58",
    },
    17: {
      fajr: "03:24",
      jamat_fajr: "03:34",
      soloppgang: "04:22",
      duhur: "13:30",
      asr: "17:40",
      maghrib: "22:04",
      isha: "22:59",
    },
    18: {
      fajr: "03:21",
      jamat_fajr: "03:31",
      soloppgang: "04:19",
      duhur: "13:30",
      asr: "17:41",
      maghrib: "22:06",
      isha: "23:00",
    },
    19: {
      fajr: "03:19",
      jamat_fajr: "03:29",
      soloppgang: "04:17",
      duhur: "13:30",
      asr: "17:42",
      maghrib: "22:09",
      isha: "23:02",
    },
    20: {
      fajr: "03:16",
      jamat_fajr: "03:26",
      soloppgang: "04:14",
      duhur: "13:30",
      asr: "17:43",
      maghrib: "22:11",
      isha: "23:03",
    },
    21: {
      fajr: "03:14",
      jamat_fajr: "03:24",
      soloppgang: "04:12",
      duhur: "13:30",
      asr: "17:44",
      maghrib: "22:14",
      isha: "23:04",
    },
    22: {
      fajr: "03:12",
      jamat_fajr: "03:22",
      soloppgang: "04:10",
      duhur: "13:30",
      asr: "17:44",
      maghrib: "22:16",
      isha: "23:05",
    },
    23: {
      fajr: "03:10",
      jamat_fajr: "03:20",
      soloppgang: "04:08",
      duhur: "14:00",
      asr: "17:45",
      maghrib: "22:18",
      isha: "23:06",
    },
    24: {
      fajr: "03:08",
      jamat_fajr: "03:18",
      soloppgang: "04:06",
      duhur: "13:30",
      asr: "17:46",
      maghrib: "22:21",
      isha: "23:07",
    },
    25: {
      fajr: "03:06",
      jamat_fajr: "03:16",
      soloppgang: "04:04",
      duhur: "13:30",
      asr: "17:47",
      maghrib: "22:23",
      isha: "23:09",
    },
    26: {
      fajr: "03:04",
      jamat_fajr: "03:14",
      soloppgang: "04:02",
      duhur: "13:30",
      asr: "17:48",
      maghrib: "22:25",
      isha: "23:10",
    },
    27: {
      fajr: "03:02",
      jamat_fajr: "03:12",
      soloppgang: "04:00",
      duhur: "13:30",
      asr: "17:48",
      maghrib: "22:27",
      isha: "23:11",
    },
    28: {
      fajr: "03:00",
      jamat_fajr: "03:10",
      soloppgang: "03:58",
      duhur: "13:30",
      asr: "17:49",
      maghrib: "22:30",
      isha: "23:12",
    },
    29: {
      fajr: "02:58",
      jamat_fajr: "02:58",
      soloppgang: "03:56",
      duhur: "13:30",
      asr: "17:50",
      maghrib: "22:32",
      isha: "23:13",
    },
    30: {
      fajr: "02:56",
      jamat_fajr: "03:06",
      soloppgang: "03:54",
      duhur: "14:00",
      asr: "17:51",
      maghrib: "22:34",
      isha: "23:14",
    },
    31: {
      fajr: "02:55",
      jamat_fajr: "03:05",
      soloppgang: "03:53",
      duhur: "13:30",
      asr: "17:51",
      maghrib: "22:36",
      isha: "23:16",
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
