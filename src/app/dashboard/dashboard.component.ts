import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chartPieDemo } from '../chart-pie-demo';
import { chartAreaDemo } from '../chart-area-demo';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  ngOnInit(): void {
    chartPieDemo();
    chartAreaDemo();
  }
}
