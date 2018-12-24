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

  public Background;

  public ngOnInit() {
    var _this = this;

    this.getBackground();

    setInterval(function () { _this.getBackground(); }, 5000);
  }

  public getBackground() {
    var response = this.http.get('https://cameronmcguffie.com/json/photos.php').subscribe(data => {
      this.Background = "https://cameronmcguffie.com/json/photos/" + data["background"];
      //this.Background = this.sanitizer.bypassSecurityTrustStyle("url(\"https://cameronmcguffie.com/photos/\"" + data["background"] + ")");

      //alert(this.Background);
    });
  }

  public newsReturn(event) {
    alert(event);
  }
}