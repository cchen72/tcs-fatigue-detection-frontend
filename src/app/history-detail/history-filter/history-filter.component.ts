import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../../service/employee-data.service';
import { ApiService } from '../../service/api.service';
import { FatigueHistory } from '../../model/history.model';

@Component({
  selector: 'app-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.css']
})
export class HistoryFilterComponent implements OnInit {
  employeeName: string = '';
  employeeId: string = '';

  fatigueRecords: FatigueHistory[] = [];

  // history: FatigueHistory = new FatigueHistory({
  //   id: 1,
  //   timestamp: '2023-01-01 00:00:00.33',
  //   emp_id: '1000101',
  //   fatigue_status: 0,
  // });
  records: any[] = [];

  // records = [
  //   { status: 'Not Fatigue', time: '10:00am', date: '12/10/2023', img: '/assets/no-image.png' },
  //   { status: 'Not Fatigue', time: '11:00am', date: '12/10/2023', img: '/assets/no-image.png' },
  //   { status: 'Not Fatigue', time: '12:00pm', date: '12/10/2023', img: '/assets/no-image.png' },
  //   { status: 'Fatigue', time: '1:00pm', date: '12/10/2023', img: '/assets/no-image.png' },
  //   { status: 'Fatigue', time: '2:00pm', date: '12/10/2023', img: '/assets/no-image.png' },
  //   { status: 'Fatigue', time: '3:00pm', date: '12/10/2023', img: '/assets/no-image.png' },
  // ];
  constructor(private employeeDataService: EmployeeDataService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.employeeDataService.currentEmployeeId.subscribe(id => {
      this.employeeId = id;
      console.log('Employee id: ', this.employeeId); 
    });
    //this.getFatigueById();
    this.getFatigueByRange("month");
  }

  private async getFatigueById() {
    this.apiService.fetchHistoryById(this.employeeId).subscribe(data => {
      this.fatigueRecords = data.map(item => new FatigueHistory(item));
      console.log('Fatigue Records: ', this.fatigueRecords);
      this.transformRecords();
    });
  }

  private async getFatigueByRange(range: string) {
    this.apiService.fetchFatigueRange(range).subscribe(data => {
      this.fatigueRecords = data
      .filter(item => item.emp_id === this.employeeId) // Filter step
      .map(item => new FatigueHistory(item));
      console.log('Fatigue Records: ', this.fatigueRecords);
      this.transformRecords();
    });
  }

  private transformRecords(): void {
    console.log();
    this.records = this.fatigueRecords.map(fatigueRecord => {
      return {
        status: fatigueRecord.fatigue_status === 0 ? 'Not Fatigue' : 'Fatigue',
        time: this.extractTime(fatigueRecord.timestamp),
        date: this.extractDate(fatigueRecord.timestamp),
        img: '/assets/no-image.png' // Assuming a default image for all records
      };
    });
    console.log('Records: ', this.records);
  }

  private extractDate(timestamp: string): string {
    const date = new Date(timestamp);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  private extractTime(timestamp: string): string {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  }
}
