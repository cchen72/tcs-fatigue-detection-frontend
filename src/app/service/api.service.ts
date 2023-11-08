import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Employee } from '../model/employee.model';
import {FatigueHistory} from '../model/history.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://tcs-fatigue-detection-ui.azurewebsites.net';
  //private proxyUrl = 'https://cors-anywhere.herokuapp.com';

  constructor(private http: HttpClient) { }

  fetchEmployeeById(empId: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/employee/${empId}`).pipe(
      map(data => new Employee(data))
    );
  }

  fetchEmployeesByShift(shift: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/shift/${shift}`).pipe(
      map(dataArray => dataArray.map(data => new Employee(data)))
    );
  }

  fetchHistoryById(id: number): Observable<FatigueHistory[]> {
    return this.http.get<FatigueHistory[]>(`${this.baseUrl}/history/${id}`).pipe(
      map(dataArray => dataArray.map(data => new FatigueHistory(data)))
    );
  }
}
