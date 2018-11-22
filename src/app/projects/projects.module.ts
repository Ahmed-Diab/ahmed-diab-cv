import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatSidenavModule,
  MatInputModule,
  MatSnackBarModule} from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSidenavModule,
    MatInputModule,
    MatSnackBarModule,
  ],

})
export class ProjectsModule { }
