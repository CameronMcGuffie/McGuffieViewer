declare var angular: any;

import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import * as x2js from 'x2js';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

// var myApp = angular.module('myApp', []);

@Component({
  selector: 'news-content',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent {
  constructor(private http: HttpClient) { }

  title = 'News';

  public base_uri;
  public stories;

  public ngOnInit() {
    this.doInit();
  }

  public doInit() {
    var response = this.http.get("./assets/config.json").subscribe(data => {
      this.base_uri = data['base_uri'];

      this.getFeed(this.base_uri + '');
    });
  }

  public getFeed(url) {
    var response = this.http.get(url).subscribe(data => {
      this.stories = '';

      var body = data['channel']['item'];

      body.forEach(element => {
        if (this.stories.indexOf(element['title'])) {
          if (this.stories) { this.stories = this.stories + ' | '; }
          this.stories = this.stories + element['title'];
        }
      });

      //console.log(this.stories);
    });
  }
}