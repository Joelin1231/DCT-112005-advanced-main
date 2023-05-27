import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { Component } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'charts',
    component: ChartsComponent
  },
  {
    path:'tables',
    component: TablesComponent
  },
  {
    path:'not-found',
    component: NotFoundComponent
  },
  {
    path:'**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }

];
