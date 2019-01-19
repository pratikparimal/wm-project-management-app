import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ProjectDetails } from './resourceUploadClasses/Project_ID_Name';
import { ResourceDetails } from './resourceUploadClasses/ResourceDetails';
import { ResourceDetailsService } from '../service/resource-details.service';
import { DomainDetails } from './resourceUploadClasses/DomainDetails';

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
  // @Input() min: Number;
  // @Input() max: Number;
  // displayValue: String | Number;

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
   // this.router.navigateByUrl('/requirements');
    // console.log(this.finalResourceDetailsArray);
    console.log(this.resourceForm.value);
    // if(this.resourceForm.valid)
    this._resourceService.putAllResourceData(this.resourceForm.value);
   // this.thisDialogRef.close(this.resourceForm.value);
    this.thisDialogRef.close('Closed');
  }

  // submitResources(){
  //   console.log("hi");
  //   console.log(this.resourceForm.value);
  //   this.resourceForm.reset();
  //   this.thisDialogRef.close();
  // }


  // addAnotherResource(resourceForm: NgForm) {
  //   this.resourcedetails = this.resourceForm.value;
  //   console.log('in add');
  // //  console.log("resource-details-array");
  //   //console.log(this.resourcedetails);
  //   if (this.resourcedetails.cogId) {
  //     if (this.resourcedetailsArray.length < 3) {
  //      // console.log(this.resourcedetails);
  //       this.resourcedetailsArray.push(this.resourcedetails);
  //       this.resourcedetails = new ResourceDetails;
  //       // resourceForm.form.reset();
  //       console.log(this.resourcedetailsArray);
  //     }
  //     else alert('Maximum 3 resources can be added at a time');
  //   }
  //   else alert('Add atleast one resource');
  // }
}










