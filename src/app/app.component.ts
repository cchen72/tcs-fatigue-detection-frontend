import { Component, Input } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tsc-fatigue';
  constructor(){
    setTheme('bs5');
  }

  isNotificationVisible = false;


  showNotification() {
    this.isNotificationVisible = true;
  }

  closeNotification() {
    this.isNotificationVisible = false;
  }
  
  // Part for employee
  selectedShift: string = '1';

  onShiftSelected(shift: string) {
    this.selectedShift = shift;
  }

}
