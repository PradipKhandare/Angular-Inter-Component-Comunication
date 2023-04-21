import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Structural-Directive';

  message : string[] = [];
  getMessage (text : string)
  {
      this.message.push(text);
  }
}
