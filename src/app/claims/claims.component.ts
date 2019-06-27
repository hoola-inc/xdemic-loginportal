import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {

  userForm: FormGroup;


  constructor(private fromBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.userForm = this.fromBuilder.group({
      userFirstName: ['', Validators.required],
      userLastName: ['', Validators.required],
      userEmail: ['', Validators.required],
      userMobile: ['', Validators.required],
      userAddress: ['', Validators.required]
    });
  }

  addClaim() {
    console.log('i am here ...');
    const fd = new FormData();
    fd.append('userFirstName', this.userForm.value.userFirstName);
    fd.append('userLastName', this.userForm.value.userLastName);
    fd.append('userAddress', this.userForm.value.userAddress);
    fd.append('userEmail', this.userForm.value.userEmail);
    fd.append('userMobile', this.userForm.value.userMobile);

    console.log(fd);
  }

}
