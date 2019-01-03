import { Component, OnInit } from '@angular/core';
import { OpenRequirementService } from 'src/app/service/open-requirement-service.service';
import { OpenRequirementFormModel } from '../openRequirementClasses/openRequirementFormModel';
import { MatTableDataSource } from '@angular/material';
import OPEN_REQUIREMENT_DATA from 'src/app/data/openRequirementTableData';

@Component({
  selector: 'app-open-requirements-view',
  templateUrl: './open-requirements-view.component.html',
  styleUrls: ['./open-requirements-view.component.scss']
})
export class OpenRequirementsViewComponent implements OnInit {

  constructor(private _openRequirementService: OpenRequirementService) {  }

  errorMessage: string;
  dataSource: OpenRequirementFormModel[] = [];
  dataSources: MatTableDataSource<any>;

  // DATASOURCE: any[] = this._openRequirementService.getOpenRequirementAllData();
  // dataSource = new MatTableDataSource(this.DATASOURCE);

  // dataSource = OPEN_REQUIREMENT_DATA;

  // DATASOURCE: any[] = this._openRequirementService.getOpenRequirementAllData();
  // dataSource = this.DATASOURCE;


  displayedColumns = [
    'soLineItemID',
    'ownerName',
    'domainName',
    'groupName',
    'projectId',
    'projectName',
    'winzoneId',
    'winzoneOpportunity',
    'locationName',
    'opportunityIdentifiedDate',
    'billStartDate',
    'currStatus',
    'pipelineCount',
    'forecastType',
    'filledInternally',
    'requirementComment',
    'closureComment',
    'updateRow',
    'deleteRow'
  ];


  ngOnInit() {
    this._openRequirementService.getAllOpenRequirementData()
    .subscribe(
      dataS => this.dataSources = new MatTableDataSource(dataS),
      error => this.errorMessage = <any>error
    );
    // console.log('Length of dataSource : ' + this.dataSource.length);


  //   this.dataSource = this._openRequirementService.getOpenRequirementAllData();
  //   console.log('Length of dataSource : ' + this.dataSource.length);
  //  }

  }

  editRequirementData(soLineItemID: number) {
    console.log('Update Function for : ' + soLineItemID);
  }

  deleteRequirementData(soLineItemID: number) {
    console.log('Delete Function for : ' + soLineItemID);
  }

  applyFilter(filterValue: string) {
    this.dataSources.filter = filterValue.trim().toLowerCase();
  }
}
