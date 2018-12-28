import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatTableDataSource } from '@angular/material';

import { ResourceUploadComponent } from '../resource-upload/resource-upload.component';
import { ResourceDetailsService } from '../service/resource-details.service';
import { ProjectDetails } from '../resource-upload/resourceUploadClasses/Project_ID_Name';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.scss']
})
export class ResourceDetailsComponent implements OnInit {

  constructor(private _resourceService: ResourceDetailsService, private dialog?: MatDialog) { }

  isPopupOpened = true;
  // dataSource=this._resourceService.resourceData.toString;
  resultantArray: any = [];
  dialogResult = null;
  public hideTable: Boolean = true;
  projectdetails: ProjectDetails[];
  dataSource = new MatTableDataSource(this.resultantArray);
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['cogId', 'name', 'wmId', 'fgWorkId', 'fgContract', 'billability', 'allocation', 'location', 'pickerStart', 'pickerEnd'];
  ngOnInit() {
    this.projectdetails = [
      { id: 1, name: 'Management-App' },
      { id: 2, name: 'Crud App' }
    ];
  }

  //  const SINGLE_DATA: finalResourceDetailsArray[];


  addContact() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(ResourceUploadComponent, {
      // data: 'Hi I am passed from bottom'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
      // console.log(`Dialog closed ${result}`);
      // this.dialogResult = result;
      // console.log("Value from service method");
      // this._resourceService.getAllResourceData();
      // this._resourceService.getAllNames();
      // this.ResultantArray = result;
      // console.log("result = " + this.dialogResult);
    });
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  Search(id: any) {
    this.hideTable = false;
    this.resultantArray = [];
    for (let index of this._resourceService.resourceData) {
      if (index.projectId === id) {
        this.resultantArray.push(index);
      }
    }
  }
}






























