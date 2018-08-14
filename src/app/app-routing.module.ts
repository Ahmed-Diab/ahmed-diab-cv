import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},

  {path:'home', component:HomeComponent, data:{depth:'home'}},
  {path:'contact', component:ContactComponent, data:{depth:'contact'}},
  {path:'projects', component:ProjectsComponent, data:{depth:'projects'}},

  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
