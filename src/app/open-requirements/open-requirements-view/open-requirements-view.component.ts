import { Component, OnInit, ViewChild } from '@angular/core';
import { OpenRequirementService } from 'src/app/service/open-requirement-service.service';
import { OpenRequirementFormModel } from '../openRequirementClasses/openRequirementFormModel';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { OpenRequirementsEditComponent } from '../open-requirements-edit/open-requirements-edit.component';

@Component({
  selector: 'app-open-requirements-view',
  templateUrl: './open-requirements-view.component.html',
  styleUrls: ['./open-requirements-view.component.scss']
})
export class OpenRequirementsViewComponent implements OnInit {

  errorMessage: string;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  displayedColumns = [
    'soLineItemID',
    'ownerName',
    'domainName',
    'projectId',
    'projectName',
    'groupName',
    'winzoneId',
    'winzoneOpportunity',
    'skillset',
    'locationName',
    'opportunityIdentifiedDate',
    'billStartDate',
    'billEndDate',
    'rate',
    'revenue',
    'currStatus',
    'profilesInEvaluation',
    'soCreatedDate',
    'forecastType',
    'filledInternally',
    'requirementComment',
    'closureComment',
    'actionRow'
  ];

  constructor(private _openRequirementService: OpenRequirementService,
    public dialog: MatDialog) {  }

  ngOnInit() {
    this._openRequirementService.getAllOpenRequirementData().subscribe(
      dataSource => {
        this.dataSource = new MatTableDataSource(dataSource);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => this.errorMessage = <any>error
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editRequirementData(updateData: any) {
    console.log('Update Function for : ' + updateData.soLineItemID);
    const dialogRef = this.dialog.open(OpenRequirementsEditComponent, {
      data: {updateData}
    });
  }

  deleteRequirementData(soLineItemID: number) {
    console.log('Delete Function for : ' + soLineItemID);
    alert('Do you want to delete record for ' + soLineItemID);
  }
}


