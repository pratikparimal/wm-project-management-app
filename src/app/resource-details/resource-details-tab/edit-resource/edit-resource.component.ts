import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ResourceDetails } from '../../resource-upload/resourceUploadClasses/ResourceDetails';
import { ProjectDetails } from '../../resource-upload/resourceUploadClasses/Project_ID_Name';
import { DomainDetails } from '../../resource-upload/resourceUploadClasses/DomainDetails';
import { ProjectRoles } from '../../resource-upload/resourceUploadClasses/project-roles';
import { FormBuilder } from '@angular/forms';
import { ResourceDetailsService } from 'src/app/service/resource-details.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-edit-resource',
  templateUrl: './edit-resource.component.html',
  styleUrls: ['./edit-resource.component.scss']
})
export class EditResourceComponent implements OnInit {

  constructor(private _resourceService: ResourceDetailsService,
  public thisDialogRef: MatDialogRef < EditResourceComponent>, private _formBuilder: FormBuilder, public snackBar: MatSnackBar,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

 
  id : number = this.data;
  projectdetails: ProjectDetails[];
  domaindetails: DomainDetails[];
  roles : ProjectRoles[];
  resourcedetails: ResourceDetails = new ResourceDetails();
  resourcedetailsArray: any = [];
  finalResourceDetailsArray: any = [];

  @Output() selectionChange: EventEmitter<any>;
  @Output() change: EventEmitter<any>;
  errorMessage: string;
  allData : any;
  resultantArray: any = [];
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
    skillSet : [],
    experience : [],
    role : [],
    rate: []
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

    this.roles = [
      {role : 'Analyst', rate : 5},
      {role : 'Associate', rate : 10},
      {role : 'Senior Associate', rate : 15}
    ]

    // this._resourceService.getAllResourceData().subscribe(
    //   dataValue => { this.allData = dataValue;
    //     for(let index of this.allData){
    //       // console.log(index.cogId);
    //       console.log(this.id);
    //       console.log(index.cogId);
    //       if(index.cogId === this.data){
    //         console.log(index.cogId);
    //         console.log(this.data);
    //         this.resultantArray.push(index.wmId);
    //       }
    //     }
       
    //   },
    //   error => this.errorMessage = <any>error
    // );
    
     this.resultantArray.push(this.data.data);

     this.resourceForm.get('skillSet').setValue(this.resultantArray[0].skillSet);
     this.resourceForm.get('experience').setValue(this.resultantArray[0].experience);
     this.resourceForm.get('role').setValue(this.resultantArray[0].role);
     this.resourceForm.get('rate').setValue(this.resultantArray[0].rate);
     this.resourceForm.get('projectId').setValue(this.resultantArray[0].projectId);
     this.resourceForm.get('projectName').setValue(this.resultantArray[0].projectName);
     this.resourceForm.get('name').setValue(this.resultantArray[0].name);
     this.resourceForm.get('wmId').setValue(this.resultantArray[0].wmId);
     this.resourceForm.get('cogId').setValue(this.resultantArray[0].cogId);
     this.resourceForm.get('fgWorkId').setValue(this.resultantArray[0].fgWorkId);
     this.resourceForm.get('fgContract').setValue(this.resultantArray[0].fgContract);
     this.resourceForm.get('billability').setValue(this.resultantArray[0].billability);
     this.resourceForm.get('location').setValue(this.resultantArray[0].location);
     this.resourceForm.get('pickerStart').setValue(this.resultantArray[0].pickerStart);
     this.resourceForm.get('pickerEnd').setValue(this.resultantArray[0].pickerEnd);
     this.resourceForm.get('allocation').setValue(this.resultantArray[0].allocation);

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

