import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import {DashboardService} from './dashbord/dashboard.service';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashbordComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    DashbordComponent, MyProfileComponent, AboutComponent, ProjectsComponent
  ],
  providers:[
    DashboardService
  ]
})
export class AdminModule { }
