import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  apiData: any = {};

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onSendRequest(): void {
    this.http.get('https://reqres.in/api/users?page=1').subscribe(data => {
      console.log(data);
      this.apiData = data;
    });
  }
}
