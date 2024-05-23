import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {WeatherService} from "../services/weather.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit{
  city:string = 'tashkent';
  weatherData:any;
  constructor(private weatherService:WeatherService) {
  }
  ngOnInit(){
  this.getWeather();
  }

  getWeather(){
    this.weatherService.getWeather(this.city).subscribe(data=>{
      this.weatherData=data;
      console.log(data);
    })
  }

}
