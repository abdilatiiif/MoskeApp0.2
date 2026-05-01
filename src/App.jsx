import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:05",
      duhur: "14:00",
      asr: "17:23",
      maghrib: "21:22",
      isha: "22:40",
    },
    2: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:02",
      duhur: "13:22",
      asr: "17:25",
      maghrib: "21:25",
      isha: "22:41",
    },
    3: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "04:59",
      duhur: "13:22",
      asr: "17:26",
      maghrib: "21:27",
      isha: "22:43",
    },
    4: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "04:56",
      duhur: "13:22",
      asr: "17:27",
      maghrib: "21:30",
      isha: "22:44",
    },
    5: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "04:54",
      duhur: "13:22",
      asr: "17:28",
      maghrib: "21:33",
      isha: "22:45",
    },
    6: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "04:51",
      duhur: "13:21",
      asr: "17:29",
      maghrib: "21:35",
      isha: "22:46",
    },
    7: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "04:48",
      duhur: "13:21",
      asr: "17:30",
      maghrib: "21:38",
      isha: "22:47",
    },
    8: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "04:45",
      duhur: "14:00",
      asr: "17:31",
      maghrib: "21:40",
      isha: "22:48",
    },
    9: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "04:43",
      duhur: "13:21",
      asr: "17:32",
      maghrib: "21:43",
      isha: "22:50",
    },
    10: {
      fajr: "03:42",
      jamat_fajr: "",
      soloppgang: "04:40",
      duhur: "13:21",
      asr: "17:33",
      maghrib: "21:46",
      isha: "22:51",
    },
    11: {
      fajr: "03:39",
      jamat_fajr: "",
      soloppgang: "04:37",
      duhur: "13:21",
      asr: "17:34",
      maghrib: "21:48",
      isha: "22:52",
    },
    12: {
      fajr: "03:37",
      jamat_fajr: "",
      soloppgang: "04:35",
      duhur: "13:21",
      asr: "17:35",
      maghrib: "21:51",
      isha: "22:53",
    },
    13: {
      fajr: "03:34",
      jamat_fajr: "",
      soloppgang: "04:32",
      duhur: "13:21",
      asr: "17:36",
      maghrib: "21:53",
      isha: "22:54",
    },
    14: {
      fajr: "03:32",
      jamat_fajr: "",
      soloppgang: "04:30",
      duhur: "13:21",
      asr: "17:37",
      maghrib: "21:56",
      isha: "22:55",
    },
    15: {
      fajr: "03:29",
      jamat_fajr: "",
      soloppgang: "04:27",
      duhur: "14:00",
      asr: "17:38",
      maghrib: "21:58",
      isha: "22:57",
    },
    16: {
      fajr: "03:27",
      jamat_fajr: "",
      soloppgang: "04:25",
      duhur: "13:21",
      asr: "17:39",
      maghrib: "22:01",
      isha: "22:58",
    },
    17: {
      fajr: "03:24",
      jamat_fajr: "",
      soloppgang: "04:22",
      duhur: "13:21",
      asr: "17:40",
      maghrib: "22:03",
      isha: "22:59",
    },
    18: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "04:20",
      duhur: "13:21",
      asr: "17:41",
      maghrib: "22:06",
      isha: "23:00",
    },
    19: {
      fajr: "03:19",
      jamat_fajr: "",
      soloppgang: "04:17",
      duhur: "13:21",
      asr: "17:42",
      maghrib: "22:08",
      isha: "23:01",
    },
    20: {
      fajr: "03:17",
      jamat_fajr: "",
      soloppgang: "04:15",
      duhur: "13:21",
      asr: "17:42",
      maghrib: "22:11",
      isha: "23:02",
    },
    21: {
      fajr: "03:15",
      jamat_fajr: "",
      soloppgang: "04:13",
      duhur: "13:21",
      asr: "17:43",
      maghrib: "22:13",
      isha: "23:04",
    },
    22: {
      fajr: "03:13",
      jamat_fajr: "",
      soloppgang: "04:11",
      duhur: "14:00",
      asr: "17:44",
      maghrib: "22:16",
      isha: "23:05",
    },
    23: {
      fajr: "03:10",
      jamat_fajr: "",
      soloppgang: "04:08",
      duhur: "13:22",
      asr: "17:45",
      maghrib: "22:18",
      isha: "23:06",
    },
    24: {
      fajr: "03:08",
      jamat_fajr: "",
      soloppgang: "04:06",
      duhur: "13:22",
      asr: "17:46",
      maghrib: "22:20",
      isha: "23:07",
    },
    25: {
      fajr: "03:06",
      jamat_fajr: "",
      soloppgang: "04:04",
      duhur: "13:22",
      asr: "17:47",
      maghrib: "22:22",
      isha: "23:08",
    },
    26: {
      fajr: "03:04",
      jamat_fajr: "",
      soloppgang: "04:02",
      duhur: "13:22",
      asr: "17:47",
      maghrib: "22:25",
      isha: "23:09",
    },
    27: {
      fajr: "03:02",
      jamat_fajr: "",
      soloppgang: "04:00",
      duhur: "13:22",
      asr: "17:48",
      maghrib: "22:27",
      isha: "23:11",
    },
    28: {
      fajr: "03:00",
      jamat_fajr: "",
      soloppgang: "03:58",
      duhur: "13:22",
      asr: "17:49",
      maghrib: "22:29",
      isha: "23:12",
    },
    29: {
      fajr: "02:58",
      jamat_fajr: "",
      soloppgang: "03:56",
      duhur: "14:00",
      asr: "17:50",
      maghrib: "22:31",
      isha: "23:13",
    },
    30: {
      fajr: "02:57",
      jamat_fajr: "",
      soloppgang: "03:55",
      duhur: "13:22",
      asr: "17:50",
      maghrib: "22:33",
      isha: "23:14",
    },
    31: {
      fajr: "02:55",
      jamat_fajr: "",
      soloppgang: "03:53",
      duhur: "13:23",
      asr: "17:51",
      maghrib: "22:35",
      isha: "23:15",
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
