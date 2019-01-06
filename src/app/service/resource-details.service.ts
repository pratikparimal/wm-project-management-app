import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { ResourceDetails } from '../resource-details/resource-upload/resourceUploadClasses/ResourceDetails';

@Injectable({
  providedIn: 'root'
})
export class ResourceDetailsService {

  private dataUrl = 'api/resources';

  constructor(private http: HttpClient) {
    this.http = http;
   }
  
  resourceData: ResourceDetails[] = [];
  singleResourceData : ResourceDetails;

  saveExcelFile(formData:FormData):Observable<any>{
    return this.http.post('http://localhost:15000/uploadExcel',formData);
  }

  putAllResourceData(data: ResourceDetails) {
    this.resourceData.push(data);
  }

  getAllResourceData(): Observable<ResourceDetails[]>{
    return this.http.get<ResourceDetails[]>(this.dataUrl)
      .pipe(
        tap(data => console.log('AllR : ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    //return of(this.resourceData);
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

  getAllNames(){
    console.log("names");
    for(let name of this.resourceData) {
       console.log(name.cogId);
    }
  }

  // getSingleResource(id:any): Observable<ResourceDetails[]>{
  //  this.http.get<ResourceDetails[]>(this.dataUrl)
  //   .pipe(
  //     tap(data => data.filter(id => id === ),
  //     catchError(this.handleError)
  //   );
  // }
}




