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

  // DATASOURCE: any[] = this._openRequirementService.getOpenRequirementAllData();
  // dataSource = new MatTableDataSource(this.DATASOURCE);

  // dataSource = OPEN_REQUIREMENT_DATA;

  DATASOURCE: any[] = this._openRequirementService.getOpenRequirementAllData();
  dataSource = this.DATASOURCE;


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
    'closureComment'
  ];


  constructor(private _openRequirementService: OpenRequirementService) {  }

  ngOnInit() {
    console.log(this.dataSource);
   }

}
