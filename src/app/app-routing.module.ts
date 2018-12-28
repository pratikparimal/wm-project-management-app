import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenRequirementsComponent } from './open-requirements/open-requirements.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/requirements', pathMatch: 'full' },
  { path: 'requirements', component: OpenRequirementsComponent},
  { path: 'resourceupload', component: ResourceDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
