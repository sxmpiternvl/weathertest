import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { WeatherService } from "../services/weather.service";
import { WeatherData } from "../interface/weatherDataInterface";

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
  weatherData!: WeatherData;
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = "";
  iconURL!: string;
  error!: string;
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather(this.city);
  }

  getWeather(city: string) {
    this.weatherService.getWeather(city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.city = city;
        this.temperature = this.weatherData.main.temp;
        this.feelsLikeTemp = this.weatherData.main.feels_like;
        this.humidity = this.weatherData.main.humidity;
        this.pressure = this.weatherData.main.pressure;
        this.summary = this.weatherData.weather[0].main;
        this.iconURL = 'https://openweathermap.org/img/wn/' + this.weatherData.weather[0].icon + '@2x.png';
      },
      error: (err) => {
        this.error = err.message;
        alert('Error occurred')
        console.error('Error occurred:', err);
      },
      complete: () => {
        console.log('Weather data retrieval completed');
      }
    });
  }

  onSubmit() {
    this.getWeather(this.inputCity);
  }
}
