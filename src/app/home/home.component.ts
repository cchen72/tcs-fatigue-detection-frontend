import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges {
  @Input() shiftNumber: string = '1';

  employee: Employee= new Employee({
    emp_id: 'R101',
    emp_name: 'John Doe',
    emp_position: 'Software Developer',
    emp_shift: 1,
    status: false,
  });

  badStatus = '/assets/face-frown-solid.svg';
  goodStatus = '/assets/face-laugh-solid.svg';

  constructor(private apiService: ApiService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['shiftNumber']) {
      this.updateEmployeeInfo();
    }
  }

  updateEmployeeInfo() {
    // Convert shiftNumber string to number
    const shiftNum = Number(this.shiftNumber);

    // Fetch employees by shift and set the first employee as the current employee
    this.apiService.fetchEmployeesByShift(shiftNum).subscribe(employees => {
      console.log('Fetched employees by shift:', employees);
      if (employees && employees.length > 0) {
        this.employee = employees[0];
      }
    }, error => {
      console.error('Failed to fetch data by shift:', error);
    });
  }
  

  //PART for status
  showEmployeeDetails = false; // 控制员工信息的显示

  toggleEmployeeDetails() {
    this.showEmployeeDetails = !this.showEmployeeDetails;
  }

  get employeeStatusImage(): string {
    return this.employee.status ? this.goodStatus : this.badStatus;
  }

  toggleEmployeeStatus() {
    this.employee.status = !this.employee.status;
  }
}

