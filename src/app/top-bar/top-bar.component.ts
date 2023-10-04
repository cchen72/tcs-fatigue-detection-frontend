import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  // Part for employee
  @Output() shiftSelected = new EventEmitter<string>();
  selectedShift: string = '1';
  // Part for time and date
  dateValue = '';
  timeValue = '';

  @Output() notificationButtonClick: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() {
    this.updateTimeAndDate();

    // Update the timeValue every second (1000 milliseconds)
    setInterval(() => {
      this.updateTimeAndDate();
    }, 1000);
  }

  onShiftChange() {
    this.shiftSelected.emit(this.selectedShift);
  }

  onNotificationButtonClick() {
    this.notificationButtonClick.emit();
  }

  private updateTimeAndDate() {
    const now = new Date();
    this.dateValue = this.formatDate(now);
    this.timeValue = this.formatTime(now);
  }

  private formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  private formatTime(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
}
