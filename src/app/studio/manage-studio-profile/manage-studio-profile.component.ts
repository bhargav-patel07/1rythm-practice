import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManageSPService } from './service profile/manage-sp.service';


@Component({
  selector: 'app-manage-studio-profile',
  templateUrl: './manage-studio-profile.component.html',
  styleUrls: ['./manage-studio-profile.component.scss']
})
export class ManageStudioProfileComponent implements OnInit {
  public manageStudioForm: FormGroup;
  public manageStudioProfile: any[];





  constructor(private fb: FormBuilder, private httpservice: ManageSPService) {

    this.manageStudioProfile = [];
    this.manageStudioForm = new FormGroup('');
    this.manageStudioForm = this.fb.group({
      days: ['', Validators.required]
    })


  }

  ngOnInit(): void {
    this.getDayData();
  }
  get function(): { [key: string]: AbstractControl } {
    return this.manageStudioForm.controls;
  }
  getDayData() {
    this.httpservice.getDays().subscribe((days) => {
      this.manageStudioProfile = days;
    })
  }


}
