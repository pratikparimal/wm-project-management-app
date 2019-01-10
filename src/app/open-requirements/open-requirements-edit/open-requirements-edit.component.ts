import { Component, OnInit, Input, EventEmitter, Output, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

import { DOMAINS } from '../openRequirementJSONData/mock-domain';
import { PROJECTS } from '../openRequirementJSONData/mock-project';
import { GROUPS } from '../openRequirementJSONData/mock-group';
import { FORECASTS } from '../openRequirementJSONData/mock-forecast';

import { OpenRequirementService } from 'src/app/service/open-requirement-service.service';
import { OpenRequirementFormModel } from '../openRequirementClasses/openRequirementFormModel';
import { OpenRequirementsFormComponent } from '../open-requirements-form/open-requirements-form.component';

@Component({
  selector: 'app-open-requirements-edit',
  templateUrl: './open-requirements-edit.component.html',
  styleUrls: ['./open-requirements-edit.component.scss']
})
export class OpenRequirementsEditComponent implements OnInit {

  openRequirementForm: FormGroup;

  domains = DOMAINS;
  forecasts = FORECASTS;
  projects = PROJECTS;
  groups = GROUPS;

  openRequirementData: OpenRequirementFormModel;
  errorMessage: string;
  projId: any;
  updateData: Object;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<OpenRequirementsEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _openRequirementService: OpenRequirementService,
    public snackBar: MatSnackBar) {

      this.openRequirementForm = this.fb.group({
        domainName: [''],
        ownerName: [''],
        winzoneId: [''],
        winzoneOpportunity: [''],
        opportunityIdentifiedDate: [''],
        projectId: [''],
        projectName: [''],
        groupName: [''],
        locationName: [''],
        billStartDate: [''],
        currStatus: [''],
        soLineItemID: [''],
        profilesInEvaluation: [''],
        requirementComment: [''],
        forecastType: [''],
        filledInternally: [''],
        closureComment: [''],
        skillset: [''],
        billEndDate: [''],
        rate: [''],
        revenue: [''],
        soCreatedDate: [''],
      });
  }

  ngOnInit() {
    this.openRequirementForm.patchValue({
      domainName: this.data.updateData.domainName,
      ownerName: this.data.updateData.ownerName,
      winzoneId: this.data.updateData.winzoneId,
      winzoneOpportunity: this.data.updateData.winzoneOpportunity,
      opportunityIdentifiedDate: this.data.updateData.opportunityIdentifiedDate,
      projectId: this.data.updateData.projectId,
      projectName: this.data.updateData.projectName,
      groupName: this.data.updateData.groupName,
      locationName: this.data.updateData.locationName,
      billStartDate: this.data.updateData.billStartDate,
      currStatus: this.data.updateData.currStatus,
      soLineItemID: this.data.updateData.soLineItemID,
      profilesInEvaluation: this.data.updateData.profilesInEvaluation,
      requirementComment: this.data.updateData.requirementComment,
      forecastType: this.data.updateData.forecastType,
      filledInternally: this.data.updateData.filledInternally,
      closureComment: this.data.updateData.closureComment,
      skillset: this.data.updateData.skillset,
      billEndDate: this.data.updateData.billEndDate,
      rate: this.data.updateData.rate,
      revenue: this.data.updateData.revenue,
      soCreatedDate: this.data.updateData.soCreatedDate,
    });
   }


  onProjectSelect(event: any) {
    this.openRequirementForm.patchValue({
      projectId: event
    });
  }

  onOpenRequirementFormSubmit(openRequirementData: OpenRequirementFormModel): void {
    if (this.openRequirementForm.valid) {
      console.log(openRequirementData);
      this.openRequirementData = openRequirementData;
      const reqData: OpenRequirementFormModel = openRequirementData;
      console.log('just check');
      console.log(openRequirementData);
      console.log(reqData);
      // this._openRequirementService.updateOpenRequirementData(openRequirementData)
      //   .subscribe(
      //     () => this.onSaveComplete(),
      //     (error: any) => this.errorMessage = <any>error
      //   );
      this._openRequirementService.updateOpenRequirementData(openRequirementData);
      this.snackBar.open('Open Requirement Updated Successfully', '', { duration: 2000, });
      this.dialogRef.close();
    }
  }

  // saveOpenRequirementData(requirement: OpenRequirementFormModel) {
  //   console.log('In save function: ' + requirement);
  //   this._openRequirementService.createOpenRequirementData(requirement)
  //     .subscribe(
  //       () => this.onSaveComplete(),
  //       (error: any) => this.errorMessage = <any>error
  //     );
  // }

  onSaveComplete() {
    this.openRequirementForm.reset();
  }

  onSubmit(value: OpenRequirementFormModel) {
    if (this.openRequirementForm.valid) {
      console.log('in func submit : ' + value);
    }
    // const reqData: OpenRequirementFormModel = this.print(this);
    console.log('On Submit 1' + this.openRequirementForm.value.projectName);
    console.log('On Submit' + value.projectName);
  }

  print(data: any) {
    console.log(data);
  }

  formCloseButton() {
    this.dialogRef.close();
  }

}
