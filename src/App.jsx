import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "04:47",
      duhur: "13:31",
      asr: "17:44",
      maghrib: "21:58",
      isha: "22:50",
    },
    2: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "04:50",
      duhur: "13:31",
      asr: "17:43",
      maghrib: "21:56",
      isha: "22:49",
    },
    3: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "04:52",
      duhur: "13:31",
      asr: "17:42",
      maghrib: "21:53",
      isha: "22:48",
    },
    4: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "04:55",
      duhur: "13:31",
      asr: "17:41",
      maghrib: "21:50",
      isha: "22:46",
    },
    5: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "04:57",
      duhur: "13:31",
      asr: "17:40",
      maghrib: "21:48",
      isha: "22:45",
    },
    6: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:00",
      duhur: "13:31",
      asr: "17:38",
      maghrib: "21:45",
      isha: "22:44",
    },
    7: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:02",
      duhur: "14:00",
      asr: "17:37",
      maghrib: "21:42",
      isha: "22:43",
    },
    8: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:05",
      duhur: "13:31",
      asr: "17:36",
      maghrib: "21:39",
      isha: "22:42",
    },
    9: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:07",
      duhur: "13:30",
      asr: "17:35",
      maghrib: "21:36",
      isha: "22:40",
    },
    10: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:10",
      duhur: "13:30",
      asr: "17:33",
      maghrib: "21:34",
      isha: "22:39",
    },
    11: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:12",
      duhur: "13:30",
      asr: "17:32",
      maghrib: "21:31",
      isha: "22:38",
    },
    12: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:15",
      duhur: "13:30",
      asr: "17:30",
      maghrib: "21:28",
      isha: "22:37",
    },
    13: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:18",
      duhur: "13:30",
      asr: "17:29",
      maghrib: "21:25",
      isha: "22:36",
    },
    14: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:20",
      duhur: "14:00",
      asr: "17:28",
      maghrib: "21:22",
      isha: "22:34",
    },
    15: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:23",
      duhur: "13:29",
      asr: "17:26",
      maghrib: "21:19",
      isha: "22:33",
    },
    16: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:25",
      duhur: "13:29",
      asr: "17:25",
      maghrib: "21:16",
      isha: "22:32",
    },
    17: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:28",
      duhur: "13:29",
      asr: "17:23",
      maghrib: "21:13",
      isha: "22:31",
    },
    18: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:30",
      duhur: "13:29",
      asr: "17:21",
      maghrib: "21:10",
      isha: "22:29",
    },
    19: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:33",
      duhur: "13:29",
      asr: "17:20",
      maghrib: "21:07",
      isha: "22:28",
    },
    20: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:35",
      duhur: "13:28",
      asr: "17:18",
      maghrib: "21:04",
      isha: "22:27",
    },
    21: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:38",
      duhur: "14:00",
      asr: "17:17",
      maghrib: "21:01",
      isha: "22:26",
    },
    22: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:40",
      duhur: "13:28",
      asr: "17:15",
      maghrib: "20:58",
      isha: "22:25",
    },
    23: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:43",
      duhur: "13:28",
      asr: "17:13",
      maghrib: "20:55",
      isha: "22:23",
    },
    24: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:45",
      duhur: "13:27",
      asr: "17:12",
      maghrib: "20:52",
      isha: "22:22",
    },
    25: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:48",
      duhur: "13:27",
      asr: "17:10",
      maghrib: "20:49",
      isha: "22:21",
    },
    26: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:50",
      duhur: "13:27",
      asr: "17:08",
      maghrib: "20:46",
      isha: "22:20",
    },
    27: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:53",
      duhur: "13:26",
      asr: "17:06",
      maghrib: "20:43",
      isha: "22:18",
    },
    28: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:55",
      duhur: "14:00",
      asr: "17:05",
      maghrib: "20:40",
      isha: "22:17",
    },
    29: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "05:58",
      duhur: "13:26",
      asr: "17:03",
      maghrib: "20:37",
      isha: "22:16",
    },
    30: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "06:00",
      duhur: "13:26",
      asr: "17:01",
      maghrib: "20:34",
      isha: "22:15",
    },
    31: {
      fajr: "03:22",
      jamat_fajr: "",
      soloppgang: "06:03",
      duhur: "13:25",
      asr: "16:59",
      maghrib: "20:30",
      isha: "22:14",
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
