import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'weather-content',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})

export class WeatherComponent {
    constructor(private http: HttpClient) { }

    title = 'Weather';

    public base_uri;
    public date;

    public current_icon;
    public current_temp;
    public current_min_temp;
    public current_max_temp;
    public current_humidity;
    public current_wind_speed;

    public brisbane_icon;
    public brisbane_temp;
    public brisbane_min_temp;
    public brisbane_max_temp;
    public brisbane_humidity;
    public brisbane_wind_speed;

    public sydney_icon;
    public sydney_temp;
    public sydney_min_temp;
    public sydney_max_temp;
    public sydney_humidity;
    public sydney_wind_speed;

    public ngOnInit() {
        this.doInit();
    }

    public doInit() {
      var response = this.http.get("./assets/config.json").subscribe(data => {
        this.base_uri = data['base_uri'];

        var _this = this;

        this.getWeather();
        
        this.getCurrentWeather();
        this.getBrisbaneWeather();
        this.getSydneyWeather();

        this.getDate();

        setInterval(function () { _this.getCurrentWeather(); }, 5000); 
      });
    }

    public fnKtoC(k) {
        return (((k - 273.15) * 100) / 100);
    }

    // Taken from https://stackoverflow.com/questions/15397372/javascript-new-date-ordinal-st-nd-rd-th
    public nth(d) {
        if (d > 3 && d < 21) return 'th'; 
        switch (d % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    }

    public getWeather() {
        var d = new Date();
        var entry = 0;

        if(d.getHours() < 3) {
            entry = 0;
        } else if(d.getHours() < 6) {
            entry = 1;
        } else if(d.getHours() < 9) {
            entry = 2;
        } else if(d.getHours() < 12) {
            entry = 3;
        } else if(d.getHours() < 15) {
            entry = 4;
        } else if(d.getHours() < 18) {
            entry = 5;
        } else if(d.getHours() < 21) {
            entry = 6;
        } else {
            entry = 7;
        }

        var response = this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=Townsville,AU&mode=json&units=metric&appid=1ad684713fec9a8a1cc7fffce6d210b1').subscribe(data => {
            this.current_min_temp = Math.floor(data['list'][entry]['main']['temp_min']);
            this.current_max_temp = Math.floor(data['list'][entry]['main']['temp_max']);
        });
    }

    public getCurrentWeather() {
        this.getWeather();

        this.getBrisbaneWeather();
        this.getSydneyWeather();

        var response = this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Townsville,AU&mode=json&units=metric&appid=1ad684713fec9a8a1cc7fffce6d210b1').subscribe(data => {
            this.current_icon = data['weather'][0]['icon'];
            this.current_temp = Math.floor(data['main']['temp']);
            this.current_humidity = data['main']['humidity'];
            this.current_wind_speed = data['wind']['speed'];
        });
    }

    public getBrisbaneWeather() {
        var response = this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Brisbane,AU&mode=json&units=metric&appid=1ad684713fec9a8a1cc7fffce6d210b1').subscribe(data => {
            this.brisbane_icon = data['weather'][0]['icon'];
            this.brisbane_temp = Math.floor(data['main']['temp']);
            this.brisbane_humidity = data['main']['humidity'];
            this.brisbane_wind_speed = data['wind']['speed'];
            this.brisbane_min_temp = Math.floor(data['main']['temp_min']);
            this.brisbane_max_temp = Math.floor(data['main']['temp_max']);
        });
    }

    public getSydneyWeather() {
        var response = this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Sydney,AU&mode=json&units=metric&appid=1ad684713fec9a8a1cc7fffce6d210b1').subscribe(data => {
            this.sydney_icon = data['weather'][0]['icon'];
            this.sydney_temp = Math.floor(data['main']['temp']);
            this.sydney_humidity = data['main']['humidity'];
            this.sydney_wind_speed = data['wind']['speed'];
            this.sydney_min_temp = Math.floor(data['main']['temp_min']);
            this.sydney_max_temp = Math.floor(data['main']['temp_max']);
        });
    }

    public getDate() {
        var d = new Date();

        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        var day = days[d.getDay()];
        var month = months[d.getMonth()];
        var year = d.getFullYear();

        this.date = day + " the " + d.getDate() + this.nth(d.getDate()) + " of " + month + ", " + year;
    }
}