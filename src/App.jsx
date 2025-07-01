import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "02:46",
      jamat_fajr: "", // Mangler i kilden
      soloppgang: "03:46",
      duhur: "13:30",
      asr: "18:02",
      maghrib: "22:57",
      isha: "23:37",
    },
    2: {
      fajr: "02:47",
      jamat_fajr: "",
      soloppgang: "03:47",
      duhur: "13:30",
      asr: "18:02",
      maghrib: "22:56",
      isha: "23:36",
    },
    3: {
      fajr: "02:48",
      jamat_fajr: "",
      soloppgang: "03:49",
      duhur: "13:30",
      asr: "18:01",
      maghrib: "22:55",
      isha: "23:35",
    },
    4: {
      fajr: "02:50",
      jamat_fajr: "",
      soloppgang: "03:50",
      duhur: "14:00",
      asr: "18:01",
      maghrib: "22:54",
      isha: "23:34",
    },
    5: {
      fajr: "02:51",
      jamat_fajr: "",
      soloppgang: "03:51",
      duhur: "13:30",
      asr: "18:01",
      maghrib: "22:53",
      isha: "23:33",
    },
    6: {
      fajr: "02:53",
      jamat_fajr: "",
      soloppgang: "03:53",
      duhur: "13:30",
      asr: "18:01",
      maghrib: "22:52",
      isha: "23:32",
    },
    7: {
      fajr: "02:54",
      jamat_fajr: "",
      soloppgang: "03:54",
      duhur: "13:30",
      asr: "18:01",
      maghrib: "22:50",
      isha: "23:30",
    },
    8: {
      fajr: "02:56",
      jamat_fajr: "",
      soloppgang: "03:56",
      duhur: "13:30",
      asr: "18:00",
      maghrib: "22:49",
      isha: "23:29",
    },
    9: {
      fajr: "02:58",
      jamat_fajr: "",
      soloppgang: "03:58",
      duhur: "13:30",
      asr: "18:00",
      maghrib: "22:47",
      isha: "23:27",
    },
    10: {
      fajr: "03:00",
      jamat_fajr: "",
      soloppgang: "03:59",
      duhur: "13:30",
      asr: "18:00",
      maghrib: "22:46",
      isha: "23:26",
    },
    11: {
      fajr: "03:02",
      jamat_fajr: "",
      soloppgang: "04:01",
      duhur: "14:00",
      asr: "17:59",
      maghrib: "22:44",
      isha: "23:24",
    },
    12: {
      fajr: "03:04",
      jamat_fajr: "",
      soloppgang: "04:03",
      duhur: "13:30",
      asr: "17:59",
      maghrib: "22:43",
      isha: "23:23",
    },
    13: {
      fajr: "03:06",
      jamat_fajr: "",
      soloppgang: "04:05",
      duhur: "13:30",
      asr: "17:58",
      maghrib: "22:41",
      isha: "23:21",
    },
    14: {
      fajr: "03:08",
      jamat_fajr: "",
      soloppgang: "04:07",
      duhur: "13:30",
      asr: "17:58",
      maghrib: "22:39",
      isha: "23:19",
    },
    15: {
      fajr: "03:10",
      jamat_fajr: "",
      soloppgang: "04:09",
      duhur: "13:30",
      asr: "17:58",
      maghrib: "22:37",
      isha: "23:17",
    },
    16: {
      fajr: "03:12",
      jamat_fajr: "",
      soloppgang: "04:11",
      duhur: "13:30",
      asr: "17:57",
      maghrib: "22:35",
      isha: "23:15",
    },
    17: {
      fajr: "03:13",
      jamat_fajr: "",
      soloppgang: "04:13",
      duhur: "13:30",
      asr: "17:56",
      maghrib: "22:33",
      isha: "23:13",
    },
    18: {
      fajr: "03:14",
      jamat_fajr: "",
      soloppgang: "04:15",
      duhur: "14:00",
      asr: "17:56",
      maghrib: "22:31",
      isha: "23:11",
    },
    19: {
      fajr: "03:15",
      jamat_fajr: "",
      soloppgang: "04:17",
      duhur: "13:30",
      asr: "17:55",
      maghrib: "22:29",
      isha: "23:09",
    },
    20: {
      fajr: "03:16",
      jamat_fajr: "",
      soloppgang: "04:19",
      duhur: "13:30",
      asr: "17:54",
      maghrib: "22:27",
      isha: "23:07",
    },
    21: {
      fajr: "03:17",
      jamat_fajr: "",
      soloppgang: "04:22",
      duhur: "13:30",
      asr: "17:54",
      maghrib: "22:25",
      isha: "23:05",
    },
    22: {
      fajr: "03:18",
      jamat_fajr: "",
      soloppgang: "04:24",
      duhur: "13:30",
      asr: "17:53",
      maghrib: "22:22",
      isha: "23:03",
    },
    23: {
      fajr: "03:20",
      jamat_fajr: "",
      soloppgang: "04:26",
      duhur: "13:30",
      asr: "17:52",
      maghrib: "22:20",
      isha: "23:02",
    },
    24: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "04:29",
      duhur: "13:30",
      asr: "17:51",
      maghrib: "22:18",
      isha: "23:01",
    },
    25: {
      fajr: "03:24",
      jamat_fajr: "",
      soloppgang: "04:31",
      duhur: "14:00",
      asr: "17:51",
      maghrib: "22:15",
      isha: "22:59",
    },
    26: {
      fajr: "03:26",
      jamat_fajr: "",
      soloppgang: "04:33",
      duhur: "13:30",
      asr: "17:50",
      maghrib: "22:13",
      isha: "22:58",
    },
    27: {
      fajr: "03:27",
      jamat_fajr: "",
      soloppgang: "04:36",
      duhur: "13:30",
      asr: "17:49",
      maghrib: "22:11",
      isha: "22:57",
    },
    28: {
      fajr: "03:28",
      jamat_fajr: "",
      soloppgang: "04:38",
      duhur: "13:30",
      asr: "17:48",
      maghrib: "22:08",
      isha: "22:56",
    },
    29: {
      fajr: "03:29",
      jamat_fajr: "",
      soloppgang: "04:41",
      duhur: "13:30",
      asr: "17:47",
      maghrib: "22:06",
      isha: "22:55",
    },
    30: {
      fajr: "03:30",
      jamat_fajr: "",
      soloppgang: "04:43",
      duhur: "13:30",
      asr: "17:46",
      maghrib: "22:03",
      isha: "22:53",
    },
    31: {
      fajr: "03:32",
      jamat_fajr: "",
      soloppgang: "04:45",
      duhur: "13:30",
      asr: "17:45",
      maghrib: "22:00",
      isha: "22:52",
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
