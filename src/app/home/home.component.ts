import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
    status: true,
  });
  fatigueSatatus = 'fatigue' || 'healthy';

  badStatus = '/assets/face-frown-solid.svg';
  goodStatus = '/assets/face-laugh-solid.svg';
  video1: SafeResourceUrl;
  video2: SafeResourceUrl;
  video3: SafeResourceUrl;
  video4: SafeResourceUrl;
  constructor(private apiService: ApiService, private sanitizer: DomSanitizer) {
    this.video1 = this.getSafeUrl('https://drive.google.com/file/d/1OP02ibRQT8EW34LtYC-MmdgF9balReqA/preview');
    this.video2 = this.getSafeUrl('https://drive.google.com/file/d/16buEj3YtuYA3FENchMq2UTGsjaLpLWLd/preview');
    this.video3 = this.getSafeUrl('https://drive.google.com/file/d/1-BNMbEknmvAwz2VAKsyXGN6VrmsJahYs/preview');
    this.video4 = this.getSafeUrl('https://drive.google.com/file/d/15cdG2UMxkxDEjSuACV7jTKw0S6En_58s/preview');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['shiftNumber']) {
      this.updateEmployeeInfo();
    }
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  updateEmployeeInfo() {
    // Convert shiftNumber string to number
    const shiftNum = Number(this.shiftNumber);

    // Fetch employees by shift and set the first employee as the current employee
    this.apiService.fetchEmployeesByShift(shiftNum).subscribe(employees => {
      //console.log('Fetched employees by shift:', employees);
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
  get employeeStatusText(): string {
    return this.employee.status ? 'healthy' : 'fatigue';
  }

  toggleEmployeeStatus() {
    this.employee.status = !this.employee.status;
  }
}

