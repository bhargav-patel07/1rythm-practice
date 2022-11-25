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
  isMusicControlVisible = true;
  isDisabled = true;
  checked: boolean = false;

  constructor(private fb: FormBuilder, private httpservice: ManageSPService) {

    this.manageStudioProfile = [];

    this.manageStudioForm = new FormGroup('');
    this.manageStudioForm = this.fb.group({
      days: [{ value: "", disabled: false }, Validators.required]
    })
  }

  ngOnInit(): void {
    this.getDayData();
  }
  get function(): { [key: string]: AbstractControl } {
    return this.manageStudioForm.controls;
  }

  getDayData() {
    this.httpservice.getDays().subscribe((res) => {
      this.manageStudioProfile = res;
      console.log(res);
    })
  }


  onClick() {
    if (this.isDisabled.valueOf()) {
      this.checked = this.isDisabled = false;
    }
    else {
      this.checked = this.isDisabled = true
    }
  }
}
