import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { SharedModule } from 'src/app/shared/shared.module';
export const routes = [
  { path: '', component: AboutComponent, pathMatch: 'full' }
];


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule

  ]
})
export class AboutModule { }
