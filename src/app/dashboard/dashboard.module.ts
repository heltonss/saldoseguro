import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidebarMenuComponent
  ]
})
export class DashboardModule { }
