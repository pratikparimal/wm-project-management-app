import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort,MatPaginator } from '@angular/material';
import { MatDialog } from '@angular/material';

import { ResourceDetailsService } from '../../service/resource-details.service';
import { ResourceDetails } from '../resource-upload/resourceUploadClasses/ResourceDetails';
import { EditResourceComponent } from './edit-resource/edit-resource.component';

@Component({
  selector: 'app-resource-details-tab',
  templateUrl: './resource-details-tab.component.html',
  styleUrls: ['./resource-details-tab.component.scss']
})

export class ResourceDetailsTabComponent implements OnInit {
  dataSources : MatTableDataSource<any>;
  errorMessage: string;
  constructor(private _resourceService: ResourceDetailsService, private dialog?: MatDialog) { }

  isPopupOpened = true;
  dataSource : ResourceDetails[] = [];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'skillSet',
    'experience',
    'role',
    'rate',
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
    'updateRow',
    'deleteRow'];

  ngOnInit() {
    this._resourceService.getAllResourceData().subscribe(
      dataValue => { this.dataSources = new MatTableDataSource(dataValue);
        this.dataSources.sort = this.sort; 
        this.dataSources.paginator = this.paginator;
        // this.dataSources.filterPredicate = (data, filter) => {
        //   return this.displayedColumns.some(ele => {
        //     return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
        //   });
        // };
      },
      error => this.errorMessage = <any>error
    );
   
  }
  
  
 
  applyFilter(filterValue: string) {
    this.dataSources.filter = filterValue.trim().toLowerCase();
  }
  
  editResourceData(data:any){
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(EditResourceComponent, {
      data : {data}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  deleteResourceData(data:any){
    alert("You are about to delete the data !!!");
  }
 
}



