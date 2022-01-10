const API_KEY = "aa6ceff75ee966bc45ddbfba4edf90b1";
// http://api.openweathermap.org/data/2.5/weather?lat=37.56826&lon=126.977829&APPID=${API_KEY}

const api = {
  key: "aa6ceff75ee966bc45ddbfba4edf90b1",
  base: "https://api.openweathermap.org/data/2.5/",
};

const dateBuilder = (d) => {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // sunday 먼저..!!
  let days = ["Sun", "Mon", "Tue", "Wed", "Tur", "Fri", "Sat"];

  let day = days[d.getDay()];
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  let date = d.getDate();

  return `${day} ${date} ${month} ${year}`;
};

const city = "Seoul";
const url = `${api.base}weather?q=${city}&appid=${api.key}`;
const [weather, setWeather] = useState("");

axios.get(url).then((responseData) => {
  const data = responseData.data;
  setWeather({
    id: data.weather[0].id,
    temperature: data.main.temp,
    main: data.weather[0].main,
    loading: false,
  });
});

let c = weather.temperature - 273.15;

const selectIcon = () => {
  let iconId = weather.id === 800 ? 0 : (parseInt(weather.id) / 100).toFixed(0);
  switch (iconId) {
    case "0":
      return <TiWeatherSunny size="6rem" color="red" />;
    case "2":
      return <TiWeatherStormy size="6rem" color="black" />;
    case "3":
      return <TiWeatherShower size="6rem" color="blue" />;
    case "5":
      return <TiWeatherDownpour size="6rem" color="navy" />;
    case "6":
      return <TiWeatherSnow size="6rem" color="white" />;
    case "7":
      return <BsCloudFog size="6rem" color="white" />;
    case "8":
      return <TiWeatherCloudy size="6rem" color="white" />;
  }
};
