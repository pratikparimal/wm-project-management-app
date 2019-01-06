import { Component, OnInit, Input, EventEmitter, Output, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

import { DOMAINS } from '../openRequirementJSONData/mock-domain';
import { PROJECTS } from '../openRequirementJSONData/mock-project';
import { GROUPS } from '../openRequirementJSONData/mock-group';
import { FORECASTS } from '../openRequirementJSONData/mock-forecast';

import { OpenRequirementService } from 'src/app/service/open-requirement-service.service';
import { OpenRequirementFormModel } from '../openRequirementClasses/openRequirementFormModel';

@Component({
  selector: 'app-open-requirements-form',
  templateUrl: './open-requirements-form.component.html',
  styleUrls: ['./open-requirements-form.component.scss']
})
export class OpenRequirementsFormComponent implements OnInit {

  openRequirementForm: FormGroup;

  domains = DOMAINS;
  forecasts = FORECASTS;
  projects = PROJECTS;
  groups = GROUPS;

  openRequirementData: OpenRequirementFormModel;
  errorMessage: string;
  projId: any;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<OpenRequirementsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OpenRequirementFormModel,
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

  ngOnInit() { }


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
      this._openRequirementService.createOpenRequirementData(openRequirementData)
        .subscribe(
          () => this.onSaveComplete(),
          (error: any) => this.errorMessage = <any>error
        );
      this.snackBar.open('Open Requirement Added Successfully', '', { duration: 2000, });
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

