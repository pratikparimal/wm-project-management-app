import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ResourceDetailsService } from '../service/resource-details.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {


  constructor(private http: HttpClient, public _resourceService: ResourceDetailsService) { }

  public selectedFile: any = File;
  public fileSelected: Boolean = false;

  pages: string[] = ['Open Requirement', 'Resource Details' ];

  selectPageForm = new FormControl('', [Validators.required]);

  ngOnInit() {
  }

  selectFile(event) {
    const file = event.target.files[0];
     this.selectedFile = file;
     this.fileSelected = true;
  }

  uploadFile() {
    console.log('uploading...');
    const fd = new FormData();
    fd.append('file', this.selectedFile);
    this._resourceService.saveExcelFile(fd).subscribe((response) => {
      console.log(response);
    });
  }

  cancelUpload() {
    console.log('cancelling...');
    this.selectedFile = null;
     this.fileSelected = false;
  }
}
