import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent, data:{depth:'home'}},
  {path:'projects', loadChildren: './projects/projects.module#ProjectsModule', data:{depth:'projects'}},
  {path:'shoes-shop', loadChildren:'./projects/shoes-shop/shoes-shop.module#ShoesShopModule'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponants = [
  HomeComponent,
]
