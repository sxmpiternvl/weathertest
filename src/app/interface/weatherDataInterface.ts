export interface WeatherData {
  main: Main;
  weather: Weather[];
  name: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  humidity: number;
  pressure: number;
}

export interface Weather {
  main: string;
  description: string;
  icon: string;
}
