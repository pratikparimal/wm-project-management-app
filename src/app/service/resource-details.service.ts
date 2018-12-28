import { Injectable } from '@angular/core';
import { ResourceDetails } from '../resource-upload/resourceUploadClasses/ResourceDetails';

@Injectable({
  providedIn: 'root'
})
export class ResourceDetailsService {

  constructor() { }
  
  resourceData: ResourceDetails[] = [];

  putAllResourceData(data: ResourceDetails) {
    this.resourceData.push(data);
  }

  getAllResourceData(){
    return this.resourceData;
  }

  getAllNames(){
    console.log("names");
    for(let name of this.resourceData) {
       console.log(name.cogId);
    }
  }
}
