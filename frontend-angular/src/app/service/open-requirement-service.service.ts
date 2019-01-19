import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { OpenRequirementFormModel } from './../open-requirements/openRequirementClasses/openRequirementFormModel';


@Injectable({
  providedIn: 'root'
})
export class OpenRequirementService {

  private dataUrl = 'api/requirements';

  openRequirementDataArray: OpenRequirementFormModel[] = [];
  openRequirementData: OpenRequirementFormModel;

  constructor(private http: HttpClient) { }

  getAllOpenRequirementData(): Observable<OpenRequirementFormModel[]> {
    this.dataUrl = 'http://localhost:8083/api/requirements';
    return this.http.get<OpenRequirementFormModel[]>(this.dataUrl)
      .pipe(
        tap(data => console.log('All : ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getOpenRequirementData(soLineItemID: number): Observable<OpenRequirementFormModel> {
    if (soLineItemID === 0) {
      return of (this.initializedOpenRequirementData());
    }
    const url = `${this.dataUrl}/${soLineItemID}`;
    return this.http.get<OpenRequirementFormModel>(url)
    .pipe(
      tap(data => console.log('Requirement : ' + JSON.stringify(data))),
        catchError(this.handleError)
    );
  }

  createOpenRequirementData(requirement: OpenRequirementFormModel): Observable<OpenRequirementFormModel> {
    console.log('in post func ' + requirement);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.dataUrl = 'http://localhost:8083/api/requirement';
    return this.http.post<OpenRequirementFormModel>(this.dataUrl, requirement, { headers: headers })
    .pipe(
      tap(data => console.log('New Requirement : ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  // updateOpenRequirementData(requirement: OpenRequirementFormModel): Observable<OpenRequirementFormModel> {
  //   console.log('in put func ' + requirement);
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.put(this.dataUrl, requirement, { headers: headers }).pipe();
  // }

  updateOpenRequirementData(requirement: OpenRequirementFormModel): void {
    console.log('in put func ' + requirement);
  }

  deleteOpenRequirementData(soLineItemID: number): Observable<{}> {
    this.dataUrl = 'http://localhost:8083/api/deleteRequirement';
    const deleteURL = `${this.dataUrl}/${soLineItemID}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<OpenRequirementFormModel>(deleteURL, { headers: headers })
    .pipe(
      tap(data => console.log('Requirement Deleted : ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  private initializedOpenRequirementData(): OpenRequirementFormModel {
    return {
      soLineItemID: 0,
      ownerName: null,
      domainName: null,
      groupName: null,
      projectId: 0,
      projectName: null,
      winzoneId: 0,
      winzoneOpportunity: null,
      locationName: null,
      opportunityIdentifiedDate: null,
      billStartDate: null,
      currStatus: null,
      skillset: null,
      billEndDate: null,
      rate: 0,
      revenue: null,
      soCreatedDate: null,
      profilesInEvaluation: null,
      forecastType: null,
      filledInternally: null,
      requirementComment: null,
      closureComment: null
    };
  }


  // putOpenRequirementData(data: OpenRequirementFormModel) {
  //   this.openRequirementData = data;
  //   this.openRequirementDataArray.push(this.openRequirementData);
  //   OPEN_REQUIREMENT_DATA.push(this.openRequirementData);
  //   // this.printFn();
  // }


  // getOpenRequirementAllData(): Observable<OpenRequirementFormModel[]> {
  //   // return of(this.openRequirementDataArray);
  //   return of(OPEN_REQUIREMENT_DATA);
  // }

  // getOpenRequirementAllData(): OpenRequirementFormModel[] {
  //   return (OPEN_REQUIREMENT_DATA);
  // }

  /*
  getOpenRequirementAllData(): Observable<OpenRequirementFormModel[]> {
    // return of(this.openRequirementDataArray);
    return this.http.get<OpenRequirementFormModel[]>(this.dataUrl).pipe(
      tap(data => console.log('All : ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}` ;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message: ${err.message}` ;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  */

  // printFn() {
  //   console.log('During Service printFn() call');
  //   // console.log(this.openRequirementData);
  //   // console.log(this.openRequirementDataArray);

  //   console.log('DataSet Print');
  //   console.log(OPEN_REQUIREMENT_DATA);
  // }

}
