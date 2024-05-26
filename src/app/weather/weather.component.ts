import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { WeatherService } from "../services/weather.service";
import { WeatherData } from "../interface/weatherDataInterface";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  city: string = 'tashkent';
  inputCity!: string;
  weatherData!:HttpResponse<WeatherData>;
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = "";
  iconURL!: string;
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather(this.city);
  }

  getWeather(city: string) {
    this.weatherService.getWeather(city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.city = city;
        console.log(data)
        this.temperature = this.weatherData.body!.main.temp;
        this.feelsLikeTemp = this.weatherData.body!.main.feels_like;
        this.humidity = this.weatherData.body!.main.humidity;
        this.pressure = this.weatherData.body!.main.pressure;
        this.summary = this.weatherData.body!.weather[0].main;
        this.iconURL = 'https://openweathermap.org/img/wn/' + this.weatherData.body!.weather[0].icon + '@2x.png';
      },
      error: (err) => {
        console.log(err)
        alert(err.error.message)
      },
    });
  }

  onSubmit() {
    this.getWeather(this.inputCity);
  }
}

//http requests  http errors observable next error responsetype
