import { routes } from './../app.routes';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chartPieDemo } from '../chart-pie-demo';
import { chartAreaDemo } from '../chart-area-demo';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  router = inject(Router);

  ngOnInit(): void {
    chartPieDemo();
    chartAreaDemo();
  }

  goToTables(){
    this.router.navigate(['/tables'], { queryParams: {num: 5} });
  }
}
