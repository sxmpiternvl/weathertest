import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {WeatherData} from "../interface/weatherDataInterface";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = `781f3c9f53499aa42172990e3f91016e`;

  constructor(private http: HttpClient) {
  }

  getWeather(city: string) {
    const params = new HttpParams().set('units','metric')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get<WeatherData>(url,{responseType:'json', params:params},)
  }

}
