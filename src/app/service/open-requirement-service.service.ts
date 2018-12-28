import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OpenRequirementFormModel } from './../open-requirements/openRequirementClasses/openRequirementFormModel';


@Injectable({
  providedIn: 'root'
})
export class OpenRequirementService {

  openRequirementDataArray: OpenRequirementFormModel[] = [];
  openRequirementData: OpenRequirementFormModel;


  putOpenRequirementData(data: OpenRequirementFormModel) {
    this.openRequirementData = data;
    this.openRequirementDataArray.push(this.openRequirementData);
    this.printFn();
  }

  getOpenRequirementAllData(): OpenRequirementFormModel[] {
    return (this.openRequirementDataArray);
  }

  // getOpenRequirementAllData(): Observable<OpenRequirementFormModel[]> {
  //   return of(this.openRequirementDataArray);
  // }

  printFn() {
    console.log('During Service printFn() call');
    console.log(this.openRequirementData);
    console.log(this.openRequirementDataArray);
  }

  constructor() { }

}
