import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ManageSPService {
  public baseUrl: any;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/";
  }
  getDays(): Observable<any> {
    const url = this.baseUrl + "studioProfile";
    return this.http.get<any>(url);
  }
  getDays1(): Observable<any> {
    const url = this.baseUrl + "studioProfile1";
    return this.http.get<any>(url);
  }
}
