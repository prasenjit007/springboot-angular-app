import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { AboutComponent } from './admin/about/about.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { ProjectsComponent } from './admin/projects/projects.component';

const routes: Routes = [
  {path: "dashbord", component: DashbordComponent},
  {path: "about", component: AboutComponent},
  {path: "profile", component: MyProfileComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "", redirectTo:"dashbord", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
