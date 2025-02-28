import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "05:09",
      jamat_fajr: "05:25",
      soloppgang: "07:12",
      duhur: "12:30",
      asr: "15:04",
      maghrib: "17:45",
      isha: "19:39",
    },
    2: {
      fajr: "05:06",
      jamat_fajr: "05:23",
      soloppgang: "07:09",
      duhur: "12:30",
      asr: "15:05",
      maghrib: "17:48",
      isha: "19:41",
    },
    3: {
      fajr: "05:03",
      jamat_fajr: "05:20",
      soloppgang: "07:06",
      duhur: "12:30",
      asr: "15:06",
      maghrib: "17:50",
      isha: "19:44",
    },
    4: {
      fajr: "04:59",
      jamat_fajr: "05:18",
      soloppgang: "07:03",
      duhur: "12:30",
      asr: "15:07",
      maghrib: "17:53",
      isha: "19:47",
    },
    5: {
      fajr: "04:56",
      jamat_fajr: "05:16",
      soloppgang: "07:00",
      duhur: "12:30",
      asr: "15:08",
      maghrib: "17:56",
      isha: "19:50",
    },
    6: {
      fajr: "04:53",
      jamat_fajr: "05:14",
      soloppgang: "06:57",
      duhur: "12:30",
      asr: "15:10",
      maghrib: "17:58",
      isha: "19:52",
    },
    7: {
      fajr: "04:50",
      jamat_fajr: "05:12",
      soloppgang: "06:54",
      duhur: "13:00",
      asr: "15:11",
      maghrib: "18:01",
      isha: "19:55",
    },
    8: {
      fajr: "04:47",
      jamat_fajr: "05:10",
      soloppgang: "06:51",
      duhur: "12:30",
      asr: "15:12",
      maghrib: "18:03",
      isha: "19:58",
    },
    9: {
      fajr: "04:43",
      jamat_fajr: "05:07",
      soloppgang: "06:48",
      duhur: "12:30",
      asr: "15:13",
      maghrib: "18:06",
      isha: "20:01",
    },
    10: {
      fajr: "04:40",
      jamat_fajr: "05:04",
      soloppgang: "06:44",
      duhur: "12:30",
      asr: "15:14",
      maghrib: "18:09",
      isha: "20:03",
    },
    11: {
      fajr: "04:37",
      jamat_fajr: "05:01",
      soloppgang: "06:41",
      duhur: "12:30",
      asr: "15:15",
      maghrib: "18:11",
      isha: "20:06",
    },
    12: {
      fajr: "04:33",
      jamat_fajr: "04:57",
      soloppgang: "06:38",
      duhur: "12:30",
      asr: "15:17",
      maghrib: "18:14",
      isha: "20:09",
    },
    13: {
      fajr: "04:30",
      jamat_fajr: "04:54",
      soloppgang: "06:35",
      duhur: "12:30",
      asr: "15:18",
      maghrib: "18:16",
      isha: "20:12",
    },
    14: {
      fajr: "04:26",
      jamat_fajr: "04:51",
      soloppgang: "06:32",
      duhur: "13:00",
      asr: "15:19",
      maghrib: "18:19",
      isha: "20:15",
    },
    15: {
      fajr: "04:23",
      jamat_fajr: "04:48",
      soloppgang: "06:29",
      duhur: "12:30",
      asr: "15:20",
      maghrib: "18:22",
      isha: "20:18",
    },
    16: {
      fajr: "04:19",
      jamat_fajr: "04:45",
      soloppgang: "06:26",
      duhur: "12:30",
      asr: "15:21",
      maghrib: "18:24",
      isha: "20:21",
    },
    17: {
      fajr: "04:15",
      jamat_fajr: "04:42",
      soloppgang: "06:23",
      duhur: "12:30",
      asr: "15:22",
      maghrib: "18:27",
      isha: "20:24",
    },
    18: {
      fajr: "04:12",
      jamat_fajr: "04:39",
      soloppgang: "06:19",
      duhur: "12:30",
      asr: "15:24",
      maghrib: "18:29",
      isha: "20:27",
    },
    19: {
      fajr: "04:08",
      jamat_fajr: "04:36",
      soloppgang: "06:16",
      duhur: "12:30",
      asr: "15:25",
      maghrib: "18:32",
      isha: "20:30",
    },
    20: {
      fajr: "04:04",
      jamat_fajr: "04:33",
      soloppgang: "06:13",
      duhur: "12:30",
      asr: "15:27",
      maghrib: "18:34",
      isha: "20:33",
    },
    21: {
      fajr: "04:01",
      jamat_fajr: "04:30",
      soloppgang: "06:10",
      duhur: "13:00",
      asr: "15:29",
      maghrib: "18:37",
      isha: "20:36",
    },
    22: {
      fajr: "03:57",
      jamat_fajr: "04:27",
      soloppgang: "06:07",
      duhur: "12:30",
      asr: "15:30",
      maghrib: "18:39",
      isha: "20:39",
    },
    23: {
      fajr: "03:53",
      jamat_fajr: "04:24",
      soloppgang: "06:04",
      duhur: "12:30",
      asr: "15:32",
      maghrib: "18:42",
      isha: "20:42",
    },
    24: {
      fajr: "03:49",
      jamat_fajr: "04:21",
      soloppgang: "06:00",
      duhur: "12:30",
      asr: "15:33",
      maghrib: "18:45",
      isha: "20:46",
    },
    25: {
      fajr: "03:45",
      jamat_fajr: "04:18",
      soloppgang: "05:57",
      duhur: "12:30",
      asr: "15:35",
      maghrib: "18:47",
      isha: "20:49",
    },
    26: {
      fajr: "03:41",
      jamat_fajr: "04:15",
      soloppgang: "05:54",
      duhur: "12:30",
      asr: "15:36",
      maghrib: "18:50",
      isha: "20:52",
    },
    27: {
      fajr: "03:37",
      jamat_fajr: "04:12",
      soloppgang: "05:51",
      duhur: "12:30",
      asr: "15:38",
      maghrib: "18:52",
      isha: "20:55",
    },
    28: {
      fajr: "03:33",
      jamat_fajr: "04:09",
      soloppgang: "05:48",
      duhur: "13:00",
      asr: "15:39",
      maghrib: "18:55",
      isha: "20:59",
    },
    29: {
      fajr: "03:29",
      jamat_fajr: "04:06",
      soloppgang: "05:45",
      duhur: "12:30",
      asr: "15:41",
      maghrib: "18:57",
      isha: "21:02",
    },
    30: {
      fajr: "04:25",
      jamat_fajr: "05:03",
      soloppgang: "06:42",
      duhur: "13:30",
      asr: "16:42",
      maghrib: "20:00",
      isha: "22:06",
    },
    31: {
      fajr: "04:20",
      jamat_fajr: "05:00",
      soloppgang: "06:39",
      duhur: "13:30",
      asr: "16:44",
      maghrib: "20:02",
      isha: "22:09",
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
