import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { Component } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimationsComponent } from './utilities/animations/animations.component';
import { BordersComponent } from './utilities/borders/borders.component';
import { OtherComponent } from './utilities/other/other.component';
import { ColorsComponent } from './utilities/colors/colors.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch:'full'
  },
  {
    path:'utilities',
    children:[
      {
        path:'',
        redirectTo:'other',
        pathMatch:'full'
      },
      {
        path:'colors',
        component:ColorsComponent
      },
      {
        path:'colors/:type',// colors/(.), 如果是 colors/ 比對不會成功
        component:ColorsComponent
      },
      {
        path:'animations',
        component:AnimationsComponent
      },
      {
        path:'borders',
        component:BordersComponent
      },
      {
        path:'other',
        component:OtherComponent
      }
    ]
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
