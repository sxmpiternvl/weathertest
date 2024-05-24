import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WeatherData} from "../interface/weatherDataInterface";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = `781f3c9f53499aa42172990e3f91016e`;

  constructor(private http: HttpClient) {

  }

  getWeather(city: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get<WeatherData>(url)
  }

}
