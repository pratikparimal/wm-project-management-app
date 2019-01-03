import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpenRequirementsComponent } from './open-requirements/open-requirements.component';
import { ResourceUploadComponent } from './resource-upload/resource-upload.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { MatDatepickerModule } from '@angular/material';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { OpenRequirementsViewComponent } from './open-requirements/open-requirements-view/open-requirements-view.component';
import { OpenRequirementsFormComponent } from './open-requirements/open-requirements-form/open-requirements-form.component';
import { OpenRequirementService } from './service/open-requirement-service.service';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { OpenRequirementData } from './open-requirements/open-requirement-api-data/openRequirementData';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OpenRequirementsComponent,
    ResourceUploadComponent,
    ResourceDetailsComponent,
    PageNotFoundComponent,
    OpenRequirementsViewComponent,
    OpenRequirementsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FlexModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(OpenRequirementData),
  ],
  entryComponents: [OpenRequirementsFormComponent, ResourceUploadComponent],
  providers: [MatDatepickerModule, OpenRequirementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
