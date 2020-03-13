import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: number = 5;
  delete: boolean = false;
  title = 'data-biding';

  changeValue() {
    this.value++;
  }

  deleteValue() {
    this.delete = true;
  }
}
