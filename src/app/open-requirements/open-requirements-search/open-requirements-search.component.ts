import { Component, OnInit, ViewChild } from '@angular/core';
import { OpenRequirementService } from 'src/app/service/open-requirement-service.service';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { OpenRequirementsEditComponent } from '../open-requirements-edit/open-requirements-edit.component';
import { OpenRequirementFormModel } from '../openRequirementClasses/openRequirementFormModel';

import { DOMAINS } from '../openRequirementJSONData/mock-domain';
import { PROJECTS } from '../openRequirementJSONData/mock-project';
import { GROUPS } from '../openRequirementJSONData/mock-group';
import { FORECASTS } from '../openRequirementJSONData/mock-forecast';

@Component({
  selector: 'app-open-requirements-search',
  templateUrl: './open-requirements-search.component.html',
  styleUrls: ['./open-requirements-search.component.scss']
})
export class OpenRequirementsSearchComponent implements OnInit {

  openRequirementSearch = this._formBuilder.group({
    searchBy: [''],
    searchValue: ['']
  });

  searchByCategory: string[] = [
    'SO LineItem ID',
    'Owner Name',
    'Domain Name',
    'Project Details',
    'Group Name',
    'Skillset',
    'Location Name',
    'Current Status',
    'Forecast Type',
    'Filled Internally'
  ];

  domains = DOMAINS;
  forecasts = FORECASTS;
  projects = PROJECTS;
  groups = GROUPS;

  errorMessage: string;
  dataSource: MatTableDataSource<any>;
  public hideTable: Boolean = true;
  resultantArray: OpenRequirementFormModel[] = [];
  data: OpenRequirementFormModel[];

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
    private _formBuilder: FormBuilder,
    public dialog: MatDialog) { }

  ngOnInit() {  }

  editRequirementData(soLineItemID: number) {
    console.log('Update Function for : ' + soLineItemID);
    const dialogRef = this.dialog.open(OpenRequirementsEditComponent, {
      data: {}
    });
  }

  deleteRequirementData(soLineItemID: number): void {
    console.log('Delete Function for : ' + soLineItemID);
    if ( confirm('Do you want to delete record for ' + soLineItemID)) {
      this._openRequirementService.deleteOpenRequirementData(soLineItemID)
      .subscribe(
        () => this.onSaveComplete(),
        (error: any) => this.errorMessage = <any>error
      );
    } else {
      console.log('Data not deleted for ' + soLineItemID);
    }
    // alert('Do you want to delete record for ' + soLineItemID);
  }

  onSaveComplete() {
    console.log('Data deleted');
  }

  onSearchFormSubmit(searchedData: any) {
    console.log(searchedData);
  }

  onSearch(searchedData: any) {
    console.log('OnSearch Function ' + searchedData);
    this.hideTable = false;
    this.resultantArray = [];

    this._openRequirementService.getAllOpenRequirementData().subscribe(
      data => {
        this.data = data;
        for ( let index of this.data) {
          if (searchedData.searchBy === 'SO LineItem ID') {
            if (index.soLineItemID === +searchedData.searchValue) {
              this.resultantArray.push(index);
            }
          } else
          if (searchedData.searchBy === 'Owner Name') {
            if (index.ownerName === searchedData.searchValue) {
              this.resultantArray.push(index);
            }
          } else
          if (searchedData.searchBy === 'Domain Name') {
            if (index.domainName === searchedData.searchValue) {
              this.resultantArray.push(index);
            }
          } else
          if (searchedData.searchBy === 'Project Details') {
            if ((index.projectId) === searchedData.searchValue) {
              this.resultantArray.push(index);
            }
          } else
          if (searchedData.searchBy === 'Group Name') {
            if (index.groupName === searchedData.searchValue) {
              this.resultantArray.push(index);
            }
          } else
          if (searchedData.searchBy === 'Skillset') {
            if (index.skillset === searchedData.searchValue) {
              this.resultantArray.push(index);
            }
          } else
          if (searchedData.searchBy === 'Location Name') {
            if (index.locationName === searchedData.searchValue) {
              this.resultantArray.push(index);
            }
          } else
          if (searchedData.searchBy === 'Current Status') {
            if (index.currStatus === searchedData.searchValue) {
              this.resultantArray.push(index);
            }
          } else
          if (searchedData.searchBy === 'Forecast Type') {
            if (index.forecastType === searchedData.searchValue) {
              this.resultantArray.push(index);
            }
          } else
          if (searchedData.searchBy === 'Filled Internally') {
            if (index.filledInternally === searchedData.searchValue) {
              this.resultantArray.push(index);
            }
          }
        }
        this.dataSource = new MatTableDataSource(this.resultantArray);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => this.errorMessage = <any>error
    );
  }

}
