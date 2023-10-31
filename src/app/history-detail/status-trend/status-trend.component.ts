import { Component, OnInit, Input } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-status-trend',
  templateUrl: './status-trend.component.html',
  styleUrls: ['./status-trend.component.css']
})
export class StatusTrendComponent implements OnInit {
  public chart: any;
  @Input() trendDate: string = '';

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    const chartData = {
      labels: ['10:00am', '11:00am', '12:00am', '1:00pm'],
      datasets: [{
        label: 'Fatigue Count',
        data: [0, 0, 0, 1], // Using numbers instead of strings for data points
        backgroundColor: 'green', // Green fill
        borderColor: 'green', // Green line color
        pointRadius: 4, // Size of the dot
        fill: false  // To ensure the area below the line isn't filled
      }]
    };

    const chartOptions = {
      aspectRatio: 2.5,
      scales: {
        y: {
          min: -1,
          max: 1,
          ticks: {
            stepSize: 0.5
          }
        },
        // x: {
        //   grid: {
        //       drawOnChartArea: false  // This will remove the vertical grid lines
        //   }
        // }
      },
      // plugins: {
      //   legend: {
      //     display: false  // This hides the dataset label
      //   }
      // }
    };

    this.chart = new Chart('MyChart', {
      type: 'line',
      data: chartData,
      options: chartOptions
    });
  }
}
