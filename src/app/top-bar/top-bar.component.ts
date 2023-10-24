import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  // Outputs
  @Output() shiftSelected = new EventEmitter<string>();
  @Output() notificationButtonClick: EventEmitter<void> = new EventEmitter<void>();

  // Properties
  selectedShift: string = '1';
  dateValue = '';
  timeValue = '';
  showHistoryFatigue = false;
  fatigueHistories = [
    { employeeName: 'John Doe', details: 'Felt drowsy after lunch.', time: '2:00 PM' },
    { employeeName: 'Richard Roe', details: 'Felt drowsy after lunch.', time: '5:00 PM' },
    //... more histories
  ];

  // Lifecycle Hooks
  ngOnInit() {
    this.updateTimeAndDate();
    this.setupTimeUpdate();
  }

  // Public Methods
  onShiftChange() {
    this.shiftSelected.emit(this.selectedShift);
  }

  onNotificationButtonClick() {
    this.notificationButtonClick.emit();
  }

  toggleHistoryFatigue() {
    this.showHistoryFatigue = !this.showHistoryFatigue;
  }

  closeHistory() {
    this.showHistoryFatigue = false;
  }

  // Private Utility Methods
  private setupTimeUpdate() {
    // Update the timeValue every second (1000 milliseconds)
    setInterval(() => {
      this.updateTimeAndDate();
    }, 1000);
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
