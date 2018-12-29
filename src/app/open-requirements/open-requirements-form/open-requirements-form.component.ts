import { Component, OnInit, Input, EventEmitter, Output, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

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
        pipelineCount: [''],
        requirementComment: [''],
        forecastType: [''],
        filledInternally: [''],
        closureComment: ['']
      });

    }

  ngOnInit() {  }


  onProjectSelect(event: any) {
    this.openRequirementForm.patchValue({
      projectId: event
    });
  }

  putOpenRequirementData() {
    this._openRequirementService.putOpenRequirementData(this.openRequirementData);
  }


  onOpenRequirementFormSubmit() {
    if (this.openRequirementForm.valid) {
      console.log('During form submit');
      console.log(this.openRequirementForm.value);
      this.openRequirementData = this.openRequirementForm.value;
      this.putOpenRequirementData();
      this.openRequirementForm.reset();
      this.snackBar.open('Open Requirement Added Successfully', '', { duration: 2000, });
      this.dialogRef.close();
    }
  }

  onSubmit() {
    this.openRequirementForm.patchValue({
      soLineItemID: '000'
    });
  }

  formCloseButton() {
    this.dialogRef.close();
  }

}
