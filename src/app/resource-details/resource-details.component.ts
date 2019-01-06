import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';


import { ResourceDetailsService } from '../service/resource-details.service';
import { DomainDetails } from './resource-upload/resourceUploadClasses/DomainDetails';
import { ResourceDetails } from './resource-upload/resourceUploadClasses/ResourceDetails';
import { ProjectDetails } from './resource-upload/resourceUploadClasses/Project_ID_Name';
import { ResourceUploadComponent } from './resource-upload/resource-upload.component';
import { SearchBy } from './resource-upload/resourceUploadClasses/searchBy';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.scss']
})
export class ResourceDetailsComponent implements OnInit {

  domaindetails: DomainDetails[];

  resourceFormSearch = this._formBuilder.group({
    inputTextField: [],
    searchBy: []
  });

  projId: any;

  constructor(private _resourceService: ResourceDetailsService, private _formBuilder: FormBuilder, private dialog?: MatDialog) { }
  dataSources: MatTableDataSource<any>;
  singleData: ResourceDetails[];
  errorMessage: string;
  isPopupOpened = true;
  resultantArray: ResourceDetails[] = [];
  dialogResult = null;
  public hideTable: Boolean = true;
  projectdetails: ProjectDetails[];
  searchBy: SearchBy[];
  dataSource = this.resultantArray;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'groupName',
    'domainName',
    'ownerName',
    'cogId',
    'name',
    'wmId',
    'fgWorkId',
    'fgContract',
    'billability',
    'allocation',
    'location',
    'pickerStart',
    'pickerEnd',
    'actions'];

  ngOnInit() {
    this.projectdetails = [
      { id: 1, name: 'Management-App' },
      { id: 2, name: 'Crud App' }
    ];

    this.domaindetails = [
      { domainName: 'Retail', groupName: 'WM-FIN' },
      { domainName: 'Health Care', groupName: 'WM-GLS' }
    ];

    //  this.searchBy = [
    //    {cogId},
    //     {wmId},
    //     {projectId},
    //     {fgWorkId},
    //     {fgContract},
    //     {ownerName},
    //     {groupName},
    //     {domainName},
    //  ]

  }



  addContact() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(ResourceUploadComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  onProjectSelect(event: any) {
    this.resourceFormSearch.patchValue({
      projectId: event
    });
  }

  Search(formData: any) {
    this.hideTable = false;
    this.resultantArray = [];

    this._resourceService.getAllResourceData().subscribe(
      dataValue => {
      this.singleData = dataValue;
        for (let index of this.singleData) {
          if (formData.searchBy == "Cognizant ID") {
              if (index.cogId === +formData.inputTextField) {
              this.resultantArray.push(index);
            }
          }
          else if (formData.searchBy == "Walmart ID") {
            if (index.wmId === formData.inputTextField) {
              this.resultantArray.push(index);
            }
          }
          else if (formData.searchBy == "Project ID") {
            if (index.projectId === +formData.inputTextField) {
              this.resultantArray.push(index);
            }
          }
          else if (formData.searchBy == "FG Work ID") {
            if (index.fgWorkId === +formData.inputTextField) {
              this.resultantArray.push(index);
            }
          }
          else if (formData.searchBy == "FG Contract") {
            if (index.fgContract === formData.inputTextField) {
              this.resultantArray.push(index);
            }
          }
          else if (formData.searchBy == "Owner Name") {
            if (index.ownerName === formData.inputTextField) {
              this.resultantArray.push(index);
            }
          }
          else if (formData.searchBy == "Group Name") {
            if (index.groupName === formData.inputTextField) {
              this.resultantArray.push(index);
            }
          }
          else if (formData.searchBy == "Domain Name") {
            if (index.domainName === formData.inputTextField) {
              this.resultantArray.push(index);
            }
          }
        }

        this.dataSources = new MatTableDataSource(this.resultantArray);
        this.dataSources.sort = this.sort;
        this.dataSources.paginator = this.paginator;
      },
      error => this.errorMessage = <any>error
    );
  }
}

