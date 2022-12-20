import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    users:any=['user 1','user 2'];
    background_color='blue';
    className='blueClass';
}
