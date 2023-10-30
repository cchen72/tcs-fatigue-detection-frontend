import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.css']
})
export class HistoryFilterComponent implements OnInit {
  records = [
    { status: 'Not Fatigue', time: '10:00am', date: '12/10/2023', img: '/src/assets/camera-solid.svg' },
    { status: 'Not Fatigue', time: '11:00am', date: '12/10/2023', img: '/src/assets/camera-solid.svg' },
    { status: 'Not Fatigue', time: '12:00pm', date: '12/10/2023', img: '/src/assets/camera-solid.svg' },
    { status: 'Fatigue', time: '1:00pm', date: '12/10/2023', img: '/src/assets/camera-solid.svg' },
    // ... additional records here
  ];
  constructor() { }

  ngOnInit(): void { }
}
