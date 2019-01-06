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
import { ResourceDetailsTabComponent } from './resource-details/resource-details-tab/resource-details-tab.component';
import { ResourceDetailsData } from './resource-details/resource-details-api-data/resourceDetailsData';

import { AllDataAPI } from './shared/data-api/AllDataAPI';
import { ResourceUploadComponent } from './resource-details/resource-upload/resource-upload.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { OpenRequirementsSearchComponent } from './open-requirements/open-requirements-search/open-requirements-search.component';
import { OpenRequirementsEditComponent } from './open-requirements/open-requirements-edit/open-requirements-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OpenRequirementsComponent,
    ResourceUploadComponent,
    ResourceDetailsComponent,
    PageNotFoundComponent,
    OpenRequirementsViewComponent,
    OpenRequirementsFormComponent,
    ResourceDetailsTabComponent,
    AdminPageComponent,
    OpenRequirementsSearchComponent,
    OpenRequirementsEditComponent
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
    InMemoryWebApiModule.forRoot(AllDataAPI)
  ],
  entryComponents: [
    OpenRequirementsFormComponent,
    ResourceUploadComponent,
    OpenRequirementsEditComponent
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
