import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { OpenRequirementFormModel } from './../open-requirements/openRequirementClasses/openRequirementFormModel';


@Injectable({
  providedIn: 'root'
})
export class OpenRequirementService {

  openRequirementDataArray: OpenRequirementFormModel[] = [];
  openRequirementData: OpenRequirementFormModel;

  private dataUrl = 'http://localhost:3000/openRequirementData';
  // private dataUrl = 'api/data/openRequirementDataSet.json';

  constructor(private http: HttpClient) { }

  putOpenRequirementData(data: OpenRequirementFormModel) {
    this.openRequirementData = data;
    this.openRequirementDataArray.push(this.openRequirementData);
    this.printFn();
  }

  // getOpenRequirementAllData(): OpenRequirementFormModel[] {
  //   return (this.openRequirementDataArray);
  // }

  getOpenRequirementAllData(): Observable<OpenRequirementFormModel[]> {
    return of(this.openRequirementDataArray);
  }

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

  printFn() {
    console.log('During Service printFn() call');
    console.log(this.openRequirementData);
    console.log(this.openRequirementDataArray);
  }

}
