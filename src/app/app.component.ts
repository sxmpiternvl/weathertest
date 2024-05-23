import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WeatherComponent} from "./weather/weather.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather';
}
