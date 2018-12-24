import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class AppComponent {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  title = 'McGuffie Viewer';

  public background;
  public base_uri;
  public transition_time;

  public ngOnInit() {
    this.doInit();
  }

  public doInit() {
    var response = this.http.get("./assets/config.json").subscribe(data => {
      this.base_uri = data['base_uri'];
      this.transition_time = data['transition_time'];

      var _this = this;

      this.getBackground();
  
      setInterval(function () { _this.getBackground(); }, this.transition_time);
    });
  }

  public getBackground() {
    var response = this.http.get(this.base_uri + 'photos.php').subscribe(data => {
      this.background = this.base_uri + "photos/" + data["background"];
      
      console.log('Loading ' + this.background);
    });
  }

  public newsReturn(event) {
    alert(event);
  }
}