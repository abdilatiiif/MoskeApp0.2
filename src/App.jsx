import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "03:32",
      jamat_fajr: "", // Mangler i kilden
      soloppgang: "04:48",
      duhur: "14:00",
      asr: "17:44",
      maghrib: "21:58",
      isha: "22:51",
    },
    2: {
      fajr: "03:33",
      jamat_fajr: "",
      soloppgang: "04:50",
      duhur: "13:30",
      asr: "17:43",
      maghrib: "21:55",
      isha: "22:50",
    },
    3: {
      fajr: "03:34",
      jamat_fajr: "",
      soloppgang: "04:53",
      duhur: "13:30",
      asr: "17:42",
      maghrib: "21:52",
      isha: "22:49",
    },
    4: {
      fajr: "03:35",
      jamat_fajr: "",
      soloppgang: "04:55",
      duhur: "13:30",
      asr: "17:40",
      maghrib: "21:50",
      isha: "22:48",
    },
    5: {
      fajr: "03:36",
      jamat_fajr: "",
      soloppgang: "04:58",
      duhur: "13:30",
      asr: "17:39",
      maghrib: "21:47",
      isha: "22:46",
    },
    6: {
      fajr: "03:37",
      jamat_fajr: "",
      soloppgang: "05:00",
      duhur: "13:30",
      asr: "17:38",
      maghrib: "21:44",
      isha: "22:45",
    },
    7: {
      fajr: "03:38",
      jamat_fajr: "",
      soloppgang: "05:03",
      duhur: "13:30",
      asr: "17:37",
      maghrib: "21:41",
      isha: "22:44",
    },
    8: {
      fajr: "03:39",
      jamat_fajr: "",
      soloppgang: "05:05",
      duhur: "14:00",
      asr: "17:36",
      maghrib: "21:39",
      isha: "22:43",
    },
    9: {
      fajr: "03:40",
      jamat_fajr: "",
      soloppgang: "05:08",
      duhur: "13:30",
      asr: "17:34",
      maghrib: "21:36",
      isha: "22:42",
    },
    10: {
      fajr: "03:41",
      jamat_fajr: "",
      soloppgang: "05:10",
      duhur: "13:30",
      asr: "17:33",
      maghrib: "21:33",
      isha: "22:40",
    },
    11: {
      fajr: "03:42",
      jamat_fajr: "",
      soloppgang: "05:13",
      duhur: "13:30",
      asr: "17:31",
      maghrib: "21:30",
      isha: "22:39",
    },
    12: {
      fajr: "03:43",
      jamat_fajr: "",
      soloppgang: "05:15",
      duhur: "13:30",
      asr: "17:30",
      maghrib: "21:27",
      isha: "22:38",
    },
    13: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:18",
      duhur: "13:30",
      asr: "17:29",
      maghrib: "21:24",
      isha: "22:37",
    },
    14: {
      fajr: "03:45",
      jamat_fajr: "",
      soloppgang: "05:20",
      duhur: "13:30",
      asr: "17:27",
      maghrib: "21:21",
      isha: "22:36",
    },
    15: {
      fajr: "03:46",
      jamat_fajr: "",
      soloppgang: "05:23",
      duhur: "14:00",
      asr: "17:26",
      maghrib: "21:18",
      isha: "22:34",
    },
    16: {
      fajr: "03:47",
      jamat_fajr: "",
      soloppgang: "05:26",
      duhur: "13:30",
      asr: "17:24",
      maghrib: "21:15",
      isha: "22:33",
    },
    17: {
      fajr: "03:48",
      jamat_fajr: "",
      soloppgang: "05:28",
      duhur: "13:30",
      asr: "17:23",
      maghrib: "21:12",
      isha: "22:32",
    },
    18: {
      fajr: "03:49",
      jamat_fajr: "",
      soloppgang: "05:31",
      duhur: "13:30",
      asr: "17:21",
      maghrib: "21:09",
      isha: "22:31",
    },
    19: {
      fajr: "03:50",
      jamat_fajr: "",
      soloppgang: "05:33",
      duhur: "13:30",
      asr: "17:20",
      maghrib: "21:06",
      isha: "22:30",
    },
    20: {
      fajr: "03:51",
      jamat_fajr: "",
      soloppgang: "05:36",
      duhur: "13:30",
      asr: "17:18",
      maghrib: "21:03",
      isha: "22:28",
    },
    21: {
      fajr: "03:52",
      jamat_fajr: "",
      soloppgang: "05:38",
      duhur: "13:30",
      asr: "17:16",
      maghrib: "21:00",
      isha: "22:27",
    },
    22: {
      fajr: "03:53",
      jamat_fajr: "",
      soloppgang: "05:41",
      duhur: "14:00",
      asr: "17:15",
      maghrib: "20:57",
      isha: "22:26",
    },
    23: {
      fajr: "03:54",
      jamat_fajr: "",
      soloppgang: "05:43",
      duhur: "13:30",
      asr: "17:13",
      maghrib: "20:54",
      isha: "22:25",
    },
    24: {
      fajr: "03:55",
      jamat_fajr: "",
      soloppgang: "05:46",
      duhur: "13:30",
      asr: "17:11",
      maghrib: "20:51",
      isha: "22:24",
    },
    25: {
      fajr: "03:56",
      jamat_fajr: "",
      soloppgang: "05:48",
      duhur: "13:30",
      asr: "17:09",
      maghrib: "20:48",
      isha: "22:22",
    },
    26: {
      fajr: "03:57",
      jamat_fajr: "",
      soloppgang: "05:51",
      duhur: "13:30",
      asr: "17:08",
      maghrib: "20:45",
      isha: "22:21",
    },
    27: {
      fajr: "03:58",
      jamat_fajr: "",
      soloppgang: "05:53",
      duhur: "13:30",
      asr: "17:06",
      maghrib: "20:42",
      isha: "22:20",
    },
    28: {
      fajr: "03:59",
      jamat_fajr: "",
      soloppgang: "05:55",
      duhur: "13:30",
      asr: "17:04",
      maghrib: "20:39",
      isha: "22:19",
    },
    29: {
      fajr: "04:00",
      jamat_fajr: "",
      soloppgang: "05:58",
      duhur: "14:00",
      asr: "17:02",
      maghrib: "20:36",
      isha: "22:18",
    },
    30: {
      fajr: "04:01",
      jamat_fajr: "",
      soloppgang: "06:02",
      duhur: "13:30",
      asr: "17:00",
      maghrib: "20:33",
      isha: "22:17",
    },
    31: {
      fajr: "04:02",
      jamat_fajr: "",
      soloppgang: "06:05",
      duhur: "13:30",
      asr: "16:59",
      maghrib: "20:30",
      isha: "22:15",
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
