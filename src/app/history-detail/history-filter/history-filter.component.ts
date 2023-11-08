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
  employeeId: number | null = null;

  fatigueRecords: FatigueHistory[] = [];

  // history: FatigueHistory = new FatigueHistory({
  //   id: 1,
  //   timestamp: '2023-01-01 00:00:00.33',
  //   emp_id: '1000101',
  //   fatigue_status: 0,
  // });
  
  records = [
    { status: 'Not Fatigue', time: '10:00am', date: '12/10/2023', img: '/assets/no-image.png' },
    { status: 'Not Fatigue', time: '11:00am', date: '12/10/2023', img: '/assets/no-image.png' },
    { status: 'Not Fatigue', time: '12:00pm', date: '12/10/2023', img: '/assets/no-image.png' },
    { status: 'Fatigue', time: '1:00pm', date: '12/10/2023', img: '/assets/no-image.png' },
    { status: 'Fatigue', time: '2:00pm', date: '12/10/2023', img: '/assets/no-image.png' },
    { status: 'Fatigue', time: '3:00pm', date: '12/10/2023', img: '/assets/no-image.png' },

    // ... additional records here
  ];
  constructor(private employeeDataService: EmployeeDataService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.employeeDataService.currentEmployeeName.subscribe(name => {
      this.employeeName = name;
    });
  
    this.employeeDataService.currentEmployeeId.subscribe(id => {
      // Use a default value if `id` is null
      const validId = id ?? 1000101; // Replace `0` with your desired default number
      this.employeeId = validId;
      
      this.apiService.fetchHistoryById(validId).subscribe(data => {
        this.fatigueRecords = data.map(item => new FatigueHistory(item));
        console.log('Fatigue Records: ', this.fatigueRecords);
      });
    });
  }
}
