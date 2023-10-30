import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
    isNotificationVisible = false;

    showNotification() {
        this.isNotificationVisible = true;
    }

    closeNotification() {
        this.isNotificationVisible = false;
    }

    selectedShift: string = '1';

    onShiftSelected(shift: string) {
        this.selectedShift = shift;
    }
}
