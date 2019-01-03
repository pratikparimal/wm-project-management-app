import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { OpenRequirementFormModel } from './../open-requirements/openRequirementClasses/openRequirementFormModel';


@Injectable({
  providedIn: 'root'
})
export class OpenRequirementService {

  private dataUrl = 'api/requirements';

  constructor(private http: HttpClient) { }

  openRequirementDataArray: OpenRequirementFormModel[] = [];
  openRequirementData: OpenRequirementFormModel;

  // getAllOpenRequirementData(): Observable<OpenRequirementFormModel[]> {
  //   return this.http.get<OpenRequirementFormModel[]>(this.dataUrl)
  //     .pipe(
  //       tap(data => console.log('All : ' + JSON.stringify(data))),
  //       catchError(this.handleError)
  //     );
  // }

  putOpenRequirementData(data: OpenRequirementFormModel) {
    this.openRequirementData = data;
    this.openRequirementDataArray.push(this.openRequirementData);
    this.printFn();
  }

  // getOpenRequirementAllData(): OpenRequirementFormModel[] {
  //   return (this.openRequirementDataArray);
  // }

  // getOpenRequirementAllData(): Observable<OpenRequirementFormModel[]> {
  //   return of(this.openRequirementDataArray);
  // }

  getAllOpenRequirementData(): Observable<OpenRequirementFormModel[]> {
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


  printFn() {
    console.log('During Service printFn() call');
    console.log(this.openRequirementData);
    console.log(this.openRequirementDataArray);
  }

}
