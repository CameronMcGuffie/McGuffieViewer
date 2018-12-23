import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'bom-content',
    templateUrl: './bom.component.html',
    styleUrls: ['./bom.component.css']
})

export class BomComponent {
    constructor(private http: HttpClient) { }

    title = 'BOM';

    public URL;
    private counter;

    public ngOnInit() {
        this.counter = 0;

        var _this = this;
        setInterval(function () { _this.getBOM(); }, 500); 
    }

    public getBOM() {
        if(this.counter == 4) { this.counter = 0; }
        
        var response = this.http.get('https://cameronmcguffie.com/json/bom.php').subscribe(data => {
            this.URL = data['content'][String(this.counter)];
        });

        if(this.counter < 4) {
            this.counter = this.counter + 1;
        } else {
            this.counter = 0;
        }
    }
}