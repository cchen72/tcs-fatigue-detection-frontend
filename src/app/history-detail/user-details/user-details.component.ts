import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  @Input() userImage?: string;
  @Input() userName: string = '';
  @Input() empID: string = '';
  @Input() userShift: string = '';
  @Input() userDesignation: string = '';
  constructor() { }
  ngOnInit(): void { }
}
