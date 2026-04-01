import Timedate from "./Timedate";
import Content from "./Content";
import "./index.css";
import React from "react";

// Endres hver mnd //////////////////////////////////////////////////////////////////

const bonnetider = [
  {
    1: {
      fajr: "04:17",
      jamat_fajr: "",
      soloppgang: "06:36",
      duhur: "13:29",
      asr: "16:45",
      maghrib: "20:04",
      isha: "22:05",
    },
    2: {
      fajr: "04:13",
      jamat_fajr: "",
      soloppgang: "06:33",
      duhur: "13:28",
      asr: "16:46",
      maghrib: "20:07",
      isha: "22:06",
    },
    3: {
      fajr: "04:08",
      jamat_fajr: "",
      soloppgang: "06:30",
      duhur: "14:00",
      asr: "16:48",
      maghrib: "20:09",
      isha: "22:07",
    },
    4: {
      fajr: "04:04",
      jamat_fajr: "",
      soloppgang: "06:27",
      duhur: "13:28",
      asr: "16:49",
      maghrib: "20:12",
      isha: "22:09",
    },
    5: {
      fajr: "03:59",
      jamat_fajr: "",
      soloppgang: "06:24",
      duhur: "13:28",
      asr: "16:51",
      maghrib: "20:14",
      isha: "22:10",
    },
    6: {
      fajr: "03:54",
      jamat_fajr: "",
      soloppgang: "06:20",
      duhur: "13:27",
      asr: "16:52",
      maghrib: "20:17",
      isha: "22:11",
    },
    7: {
      fajr: "03:49",
      jamat_fajr: "",
      soloppgang: "06:17",
      duhur: "13:27",
      asr: "16:53",
      maghrib: "20:20",
      isha: "22:12",
    },
    8: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "06:14",
      duhur: "13:27",
      asr: "16:55",
      maghrib: "20:22",
      isha: "22:13",
    },
    9: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "06:11",
      duhur: "13:26",
      asr: "16:56",
      maghrib: "20:25",
      isha: "22:14",
    },
    10: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "06:08",
      duhur: "14:00",
      asr: "16:58",
      maghrib: "20:27",
      isha: "22:16",
    },
    11: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "06:05",
      duhur: "13:26",
      asr: "16:59",
      maghrib: "20:30",
      isha: "22:17",
    },
    12: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "06:02",
      duhur: "13:26",
      asr: "17:00",
      maghrib: "20:32",
      isha: "22:18",
    },
    13: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:59",
      duhur: "13:25",
      asr: "17:02",
      maghrib: "20:35",
      isha: "22:19",
    },
    14: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:56",
      duhur: "13:25",
      asr: "17:03",
      maghrib: "20:38",
      isha: "22:20",
    },
    15: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:53",
      duhur: "13:25",
      asr: "17:04",
      maghrib: "20:40",
      isha: "22:21",
    },
    16: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:49",
      duhur: "13:25",
      asr: "17:06",
      maghrib: "20:43",
      isha: "22:23",
    },
    17: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:46",
      duhur: "14:00",
      asr: "17:07",
      maghrib: "20:45",
      isha: "22:24",
    },
    18: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:43",
      duhur: "13:24",
      asr: "17:08",
      maghrib: "20:48",
      isha: "22:25",
    },
    19: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:40",
      duhur: "13:24",
      asr: "17:09",
      maghrib: "20:51",
      isha: "22:26",
    },
    20: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:37",
      duhur: "13:24",
      asr: "17:11",
      maghrib: "20:53",
      isha: "22:27",
    },
    21: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:34",
      duhur: "13:24",
      asr: "17:12",
      maghrib: "20:56",
      isha: "22:28",
    },
    22: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:31",
      duhur: "13:23",
      asr: "17:13",
      maghrib: "20:58",
      isha: "22:30",
    },
    23: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:28",
      duhur: "13:23",
      asr: "17:14",
      maghrib: "21:01",
      isha: "22:31",
    },
    24: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:25",
      duhur: "14:00",
      asr: "17:15",
      maghrib: "21:04",
      isha: "22:32",
    },
    25: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:22",
      duhur: "13:23",
      asr: "17:17",
      maghrib: "21:06",
      isha: "22:33",
    },
    26: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:19",
      duhur: "13:23",
      asr: "17:18",
      maghrib: "21:09",
      isha: "22:34",
    },
    27: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:16",
      duhur: "13:23",
      asr: "17:19",
      maghrib: "21:12",
      isha: "22:35",
    },
    28: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:13",
      duhur: "13:22",
      asr: "17:20",
      maghrib: "21:14",
      isha: "22:37",
    },
    29: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:11",
      duhur: "13:22",
      asr: "17:21",
      maghrib: "21:17",
      isha: "22:38",
    },
    30: {
      fajr: "03:44",
      jamat_fajr: "",
      soloppgang: "05:08",
      duhur: "13:22",
      asr: "17:22",
      maghrib: "21:19",
      isha: "22:39",
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
