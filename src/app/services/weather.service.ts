import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {WeatherData} from "../interface/weatherDataInterface";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http: HttpClient) {
  }

  getWeather(city: string) {
    const params = new HttpParams().set('q',city).set('units','metric')
    const url = `https://api.openweathermap.org/data/2.5/weather/`;
    return this.http.get<WeatherData>(url,{responseType:'json', params:params, observe:'response'},)
  }

}
