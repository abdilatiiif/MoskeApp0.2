import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "03:27",
      jamat_fajr: "",
      soloppgang: "06:05",
      duhur: "13:25",
      asr: "16:57",
      maghrib: "20:27",
      isha: "22:12",
    },
    2: {
      fajr: "03:32",
      jamat_fajr: "",
      soloppgang: "06:08",
      duhur: "13:25",
      asr: "16:55",
      maghrib: "20:24",
      isha: "22:11",
    },
    3: {
      fajr: "03:36",
      jamat_fajr: "",
      soloppgang: "06:10",
      duhur: "13:24",
      asr: "16:53",
      maghrib: "20:21",
      isha: "22:10",
    },
    4: {
      fajr: "03:41",
      jamat_fajr: "",
      soloppgang: "06:13",
      duhur: "14:00",
      asr: "16:51",
      maghrib: "20:18",
      isha: "22:09",
    },
    5: {
      fajr: "03:45",
      jamat_fajr: "",
      soloppgang: "06:15",
      duhur: "13:24",
      asr: "16:49",
      maghrib: "20:15",
      isha: "22:08",
    },
    6: {
      fajr: "03:49",
      jamat_fajr: "",
      soloppgang: "06:18",
      duhur: "13:23",
      asr: "16:47",
      maghrib: "20:12",
      isha: "22:06",
    },
    7: {
      fajr: "03:53",
      jamat_fajr: "",
      soloppgang: "06:20",
      duhur: "13:23",
      asr: "16:45",
      maghrib: "20:09",
      isha: "22:05",
    },
    8: {
      fajr: "03:57",
      jamat_fajr: "",
      soloppgang: "06:23",
      duhur: "13:23",
      asr: "16:43",
      maghrib: "20:05",
      isha: "22:04",
    },
    9: {
      fajr: "04:01",
      jamat_fajr: "",
      soloppgang: "06:25",
      duhur: "13:22",
      asr: "16:41",
      maghrib: "20:02",
      isha: "22:03",
    },
    10: {
      fajr: "04:05",
      jamat_fajr: "",
      soloppgang: "06:28",
      duhur: "13:22",
      asr: "16:39",
      maghrib: "19:59",
      isha: "22:01",
    },
    11: {
      fajr: "04:09",
      jamat_fajr: "",
      soloppgang: "06:30",
      duhur: "14:00",
      asr: "16:37",
      maghrib: "19:56",
      isha: "22:00",
    },
    12: {
      fajr: "04:12",
      jamat_fajr: "",
      soloppgang: "06:33",
      duhur: "13:21",
      asr: "16:35",
      maghrib: "19:53",
      isha: "21:56",
    },
    13: {
      fajr: "04:16",
      jamat_fajr: "",
      soloppgang: "06:35",
      duhur: "13:21",
      asr: "16:33",
      maghrib: "19:50",
      isha: "21:52",
    },
    14: {
      fajr: "04:20",
      jamat_fajr: "",
      soloppgang: "06:37",
      duhur: "13:20",
      asr: "16:31",
      maghrib: "19:46",
      isha: "21:48",
    },
    15: {
      fajr: "04:23",
      jamat_fajr: "",
      soloppgang: "06:40",
      duhur: "13:20",
      asr: "16:29",
      maghrib: "19:43",
      isha: "21:44",
    },
    16: {
      fajr: "04:27",
      jamat_fajr: "",
      soloppgang: "06:42",
      duhur: "13:20",
      asr: "16:26",
      maghrib: "19:40",
      isha: "21:40",
    },
    17: {
      fajr: "04:30",
      jamat_fajr: "",
      soloppgang: "06:45",
      duhur: "13:19",
      asr: "16:24",
      maghrib: "19:37",
      isha: "21:36",
    },
    18: {
      fajr: "04:33",
      jamat_fajr: "",
      soloppgang: "06:47",
      duhur: "14:00",
      asr: "16:22",
      maghrib: "19:34",
      isha: "21:32",
    },
    19: {
      fajr: "04:36",
      jamat_fajr: "",
      soloppgang: "06:50",
      duhur: "13:19",
      asr: "16:20",
      maghrib: "19:31",
      isha: "21:29",
    },
    20: {
      fajr: "04:40",
      jamat_fajr: "",
      soloppgang: "06:52",
      duhur: "13:18",
      asr: "16:18",
      maghrib: "19:27",
      isha: "21:25",
    },
    21: {
      fajr: "04:43",
      jamat_fajr: "",
      soloppgang: "06:55",
      duhur: "13:13",
      asr: "16:16",
      maghrib: "19:24",
      isha: "21:21",
    },
    22: {
      fajr: "04:46",
      jamat_fajr: "",
      soloppgang: "06:57",
      duhur: "13:13",
      asr: "16:13",
      maghrib: "19:21",
      isha: "21:17",
    },
    23: {
      fajr: "04:49",
      jamat_fajr: "",
      soloppgang: "07:00",
      duhur: "13:12",
      asr: "16:11",
      maghrib: "19:18",
      isha: "21:14",
    },
    24: {
      fajr: "04:52",
      jamat_fajr: "",
      soloppgang: "07:02",
      duhur: "13:12",
      asr: "16:09",
      maghrib: "19:15",
      isha: "21:10",
    },
    25: {
      fajr: "04:55",
      jamat_fajr: "",
      soloppgang: "07:04",
      duhur: "13:30",
      asr: "16:07",
      maghrib: "19:12",
      isha: "21:07",
    },
    26: {
      fajr: "04:58",
      jamat_fajr: "",
      soloppgang: "07:07",
      duhur: "13:11",
      asr: "16:04",
      maghrib: "19:09",
      isha: "21:03",
    },
    27: {
      fajr: "05:01",
      jamat_fajr: "",
      soloppgang: "07:09",
      duhur: "13:11",
      asr: "16:02",
      maghrib: "19:05",
      isha: "20:59",
    },
    28: {
      fajr: "05:04",
      jamat_fajr: "",
      soloppgang: "07:12",
      duhur: "13:11",
      asr: "16:00",
      maghrib: "19:02",
      isha: "20:56",
    },
    29: {
      fajr: "05:07",
      jamat_fajr: "",
      soloppgang: "07:14",
      duhur: "13:10",
      asr: "15:57",
      maghrib: "18:59",
      isha: "20:53",
    },
    30: {
      fajr: "05:10",
      jamat_fajr: "",
      soloppgang: "07:17",
      duhur: "13:10",
      asr: "15:55",
      maghrib: "18:56",
      isha: "20:49",
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
