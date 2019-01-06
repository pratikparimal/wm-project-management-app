import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ProjectDetails } from './resourceUploadClasses/Project_ID_Name';
import { ResourceDetails } from './resourceUploadClasses/ResourceDetails';

import { DomainDetails } from './resourceUploadClasses/DomainDetails';
import { ResourceDetailsService } from 'src/app/service/resource-details.service';

@Component({
  selector: 'app-resource-upload',
  templateUrl: './resource-upload.component.html',
  styleUrls: ['./resource-upload.component.scss']
})
export class ResourceUploadComponent implements OnInit {

  constructor(private _resourceService: ResourceDetailsService,
    private _formBuilder: FormBuilder,
    private router: Router,
    public snackBar: MatSnackBar,
    public thisDialogRef: MatDialogRef < ResourceUploadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  projectdetails: ProjectDetails[];
  domaindetails: DomainDetails[];
  resourcedetails: ResourceDetails = new ResourceDetails();
  resourcedetailsArray: any = [];
  finalResourceDetailsArray: any = [];

  @Output() selectionChange: EventEmitter<any>;
  @Output() change: EventEmitter<any>;
 

  resourceForm = this._formBuilder.group({
    projectId: [],
    projectName: [],
    name: [],
    wmId: [],
    cogId: [],
    fgWorkId: [],
    fgContract: [],
    billability: [],
    location: [],
    pickerStart: [],
    pickerEnd: [],
    allocation: [],
    ownerName : [],
    groupName : [],
    domainName : []
  });

  ngOnInit() {

    this.projectdetails = [
      { id: 1, name: 'Management-App' },
      { id: 2, name: 'Crud App' }
    ];

    this.domaindetails = [
     {domainName : 'Retail', groupName: 'WM-FIN'},
     {domainName : 'Health Care', groupName: 'WM-GLS'}
    ]
  }

  selectProjName(id: any) {
    for (let i of this.projectdetails) {
      if (i.id === id) {
        this.resourcedetails.projectName = i.name;
      }
    }
  }

  selectProjID(name: any) {
    for (let i of this.projectdetails) {
      if (i.name === name) {
        this.resourcedetails.projectId = i.id;
      }
    }
  }

  submitResources() {
    this.resourcedetails = this.resourceForm.value;
    this.resourcedetailsArray.push(this.resourcedetails);
    for (let i of this.resourcedetailsArray) {
      this.finalResourceDetailsArray.push(i);
    }
    this.resourcedetailsArray = [];
    this.resourcedetails = new ResourceDetails();
    this.snackBar.open('Resource Uploaded Successfully', '', { duration: 2000, });
   // this.router.navigateByUrl('/requirements')    
    console.log(this.resourceForm.value);  
    this._resourceService.putAllResourceData(this.resourceForm.value);
    this.thisDialogRef.close('Closed');
  }

  formCloseButton() {
    this.thisDialogRef.close();
  }

}










