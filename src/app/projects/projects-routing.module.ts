import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path: '', component: ProjectsComponent},
  {path: 'shoes-shop', loadChildren: './shoes-shop/shoes-shop.module#ShoesShopModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
