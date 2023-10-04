import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges {
  badStatus = '/assets/face-frown-solid.svg';
  goodStatus = '/assets/face-laugh-solid.svg';

  @Input() shiftNumber: string = '1';
    // Define a default employee object
  employee = {
    id: 'EMP 101',
    name: 'John Doe',
    position: 'Software Developer',
    status: this.badStatus,
  };
  employeeInfo: string = 'EMP 101';
  ngOnChanges(changes: SimpleChanges) {
    if (changes['shiftNumber']) {
      this.updateEmployeeInfo();
    }
  }
  updateEmployeeInfo() {
    if (this.shiftNumber === '1') {
      this.employee = {
        id: 'EMP 101',
        name: 'John Doe',
        position: 'Software Developer',
        status: this.goodStatus,
      };
    } else if (this.shiftNumber === '2') {
      this.employee = {
        id: 'EMP 202',
        name: 'Jane Smith',
        position: 'Front-end Developer',
        status: this.badStatus,
      };
    } else if (this.shiftNumber === '3') {
      this.employee = {
        id: 'EMP 303',
        name: 'Alice Johnson',
        position: 'Back-end Developer',
        status: this.goodStatus,
      };
    }
  }

  //PART for status
  showEmployeeDetails = false; // 控制员工信息的显示

  toggleEmployeeDetails() {
    this.showEmployeeDetails = !this.showEmployeeDetails;
  }


  showImage(isVisible: boolean) {
    // Change the image source based on the boolean input
    //if (isVisible) {
    if (this.employee.status === '/assets/face-frown-solid.svg') {
      this.employee.status = '/assets/face-laugh-solid.svg'; // Set the image source when it should be visible
    } else {
      // Set a different image source when it should not be visible
      this.employee.status = '/assets/face-frown-solid.svg'; // Replace with the actual path to your alternative image
    }
  }
}

