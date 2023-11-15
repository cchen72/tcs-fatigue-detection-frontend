import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDataService } from '../service/employee-data.service';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.css']
})
export class HistoryDetailComponent implements OnInit {
  employeeId!: string;

  constructor(private route: ActivatedRoute, private employeeDataService: EmployeeDataService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employeeId = params['id'];
      //console.log('Employee id: ', this.employeeId);
      this.employeeDataService.changeEmployeeId(this.employeeId);
    });
  }
}
