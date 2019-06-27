import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {
  uri: string;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get(environment.qrCode).subscribe(res => {
      if(res.status) {
        this.uri = res.uri;
        console.log(this.uri);
      } else {
        console.log('error occured');
      }
    })
  }
}