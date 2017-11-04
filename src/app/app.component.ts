import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  button = [true, true, true, true, true, true, true, true, true, true];
  switch(idx, torf) {
    this.button[idx] = torf;
  }
}
