
import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpenRequirementFormModel } from './open-requirements/openRequirementClasses/openRequirementFormModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titles = 'Cognizant - WM Projects Management';

  // openRequirementModel = new OpenRequirementFormModel();
}
