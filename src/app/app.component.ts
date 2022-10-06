import { Component } from '@angular/core';

@Component({ // C#'daki attribute ile aynı şeydir @Component ts'de bunlara deklarasyon denir.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'northwind';
}
