import { Component,OnInit,Input } from '@angular/core';
import { EmployeeDataService } from '../../service/employee-data.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  employeeImage?: string;
  employeeName: string = '';
  employeeId: number | null = null;
  employeeShift: string = '2';
  employeeDesignation: string = '';


  constructor(private employeeDataService: EmployeeDataService) { }
  ngOnInit(): void {
    this.employeeDataService.currentEmployeeName.subscribe(name => {
      this.employeeName = name;
    });
    this.employeeDataService.currentEmployeeId.subscribe(id => {
      const validId = id ?? 1000101; // Replace `0` with your desired default number
      this.employeeId = validId;
    });
  }
}
