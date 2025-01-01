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
      soloppgang: "10:32",
      duhur: "13:11",
      asr: "16:33",
      maghrib: "20:59",
      isha: "22:33",
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
      fajr: "06:47",
      jamat_fajr: "07:25",
      soloppgang: "09:15",
      duhur: "12:30",
      asr: "13:57",
      maghrib: "15:34",
      isha: "17:50",
    },
    12: {
      fajr: "06:46",
      jamat_fajr: "07:24",
      soloppgang: "09:14",
      duhur: "12:30",
      asr: "13:58",
      maghrib: "15:36",
      isha: "17:51",
    },
    13: {
      fajr: "06:45",
      jamat_fajr: "07:23",
      soloppgang: "09:12",
      duhur: "12:30",
      asr: "14:00",
      maghrib: "15:38",
      isha: "17:53",
    },
    14: {
      fajr: "06:44",
      jamat_fajr: "07:22",
      soloppgang: "09:11",
      duhur: "12:30",
      asr: "14:01",
      maghrib: "15:40",
      isha: "17:55",
    },
    15: {
      fajr: "06:43",
      jamat_fajr: "07:21",
      soloppgang: "09:09",
      duhur: "12:30",
      asr: "14:02",
      maghrib: "15:42",
      isha: "17:56",
    },
    16: {
      fajr: "06:41",
      jamat_fajr: "07:19",
      soloppgang: "09:07",
      duhur: "12:30",
      asr: "14:04",
      maghrib: "15:44",
      isha: "17:58",
    },
    17: {
      fajr: "06:40",
      jamat_fajr: "07:18",
      soloppgang: "09:06",
      duhur: "12:30",
      asr: "14:05",
      maghrib: "15:46",
      isha: "18:00",
    },
    18: {
      fajr: "06:38",
      jamat_fajr: "07:16",
      soloppgang: "09:04",
      duhur: "12:30",
      asr: "14:07",
      maghrib: "15:48",
      isha: "18:02",
    },
    19: {
      fajr: "06:37",
      jamat_fajr: "07:15",
      soloppgang: "09:02",
      duhur: "12:30",
      asr: "14:08",
      maghrib: "15:50",
      isha: "18:04",
    },
    20: {
      fajr: "06:35",
      jamat_fajr: "07:13",
      soloppgang: "09:00",
      duhur: "12:30",
      asr: "14:10",
      maghrib: "15:52",
      isha: "18:06",
    },
    21: {
      fajr: "06:33",
      jamat_fajr: "07:12",
      soloppgang: "08:58",
      duhur: "12:30",
      asr: "14:11",
      maghrib: "15:54",
      isha: "18:08",
    },
    22: {
      fajr: "06:32",
      jamat_fajr: "07:10",
      soloppgang: "08:55",
      duhur: "12:30",
      asr: "14:12",
      maghrib: "15:56",
      isha: "18:10",
    },
    23: {
      fajr: "06:30",
      jamat_fajr: "07:08",
      soloppgang: "08:53",
      duhur: "12:30",
      asr: "14:14",
      maghrib: "15:58",
      isha: "18:12",
    },
    24: {
      fajr: "06:29",
      jamat_fajr: "07:07",
      soloppgang: "08:51",
      duhur: "12:30",
      asr: "14:15",
      maghrib: "16:00",
      isha: "18:14",
    },
    25: {
      fajr: "06:27",
      jamat_fajr: "07:05",
      soloppgang: "08:48",
      duhur: "12:30",
      asr: "14:17",
      maghrib: "16:02",
      isha: "18:16",
    },
    26: {
      fajr: "06:25",
      jamat_fajr: "07:03",
      soloppgang: "08:45",
      duhur: "12:30",
      asr: "14:19",
      maghrib: "16:04",
      isha: "18:18",
    },
    27: {
      fajr: "06:23",
      jamat_fajr: "07:01",
      soloppgang: "08:42",
      duhur: "12:30",
      asr: "14:20",
      maghrib: "16:06",
      isha: "18:20",
    },
    28: {
      fajr: "06:21",
      jamat_fajr: "06:59",
      soloppgang: "08:39",
      duhur: "12:30",
      asr: "14:22",
      maghrib: "16:08",
      isha: "18:22",
    },
    29: {
      fajr: "06:19",
      jamat_fajr: "06:57",
      soloppgang: "08:36",
      duhur: "12:30",
      asr: "14:23",
      maghrib: "16:10",
      isha: "18:24",
    },
    30: {
      fajr: "06:18",
      jamat_fajr: "06:55",
      soloppgang: "08:33",
      duhur: "12:30",
      asr: "14:25",
      maghrib: "16:12",
      isha: "18:26",
    },
    31: {
      fajr: "06:16",
      jamat_fajr: "06:53",
      soloppgang: "08:30",
      duhur: "12:30",
      asr: "14:26",
      maghrib: "16:14",
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
      const time = now.toLocaleTimeString();

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
