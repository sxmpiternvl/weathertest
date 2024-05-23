import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = `781f3c9f53499aa42172990e3f91016e`;

  constructor(private http:HttpClient) { }

  getWeather(city:string){
return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`)
}

}
