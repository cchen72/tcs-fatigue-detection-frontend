import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-status-trend',
  templateUrl: './status-trend.component.html',
  styleUrls: ['./status-trend.component.css']
})
export class StatusTrendComponent implements OnInit{
  @Input() trendDate: string = '';
  constructor() { }
  ngOnInit(): void { }
}
