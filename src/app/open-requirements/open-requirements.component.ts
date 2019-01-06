import { Component, OnInit, Input, EventEmitter, Output, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { OpenRequirementsFormComponent } from './open-requirements-form/open-requirements-form.component';
import { OpenRequirementService } from '../service/open-requirement-service.service';
import { OpenRequirementFormModel } from './openRequirementClasses/openRequirementFormModel';


@Component({
  selector: 'app-open-requirements',
  templateUrl: './open-requirements.component.html',
  styleUrls: ['./open-requirements.component.scss']
})
export class OpenRequirementsComponent implements OnInit {

  openRequirementData: OpenRequirementFormModel[];

  constructor(private _openRequirementService: OpenRequirementService,
    public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(OpenRequirementsFormComponent, {
      data: {}
    });
  }


  ngOnInit() {  }

}
