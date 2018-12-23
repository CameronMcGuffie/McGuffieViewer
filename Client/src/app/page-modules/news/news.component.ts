declare var angular: any;

import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import * as x2js from 'x2js';

// var myApp = angular.module('myApp', []);

@Component({
  selector: 'news-content',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent {
  constructor(private http: HttpClient) { }

  title = 'News';

  public stories;

  public ngOnInit() {
    this.getFeed('https://cameronmcguffie.com/json/');
  } 
 
  public getFeed(url) {
    var response = this.http.get(url).subscribe(data => {
      this.stories = '';

      var body = data['channel']['item'];

      body.forEach(element => {
        if(this.stories.indexOf(element['title'])) {
          if(this.stories) { this.stories = this.stories + ' | '; }
          this.stories = this.stories + element['title'];
        }
      });

      //console.log(this.stories);
    });
  }
}