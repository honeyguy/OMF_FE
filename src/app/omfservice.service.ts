import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OMFServiceService {

  private apiurl = "http://localhost:8080/search?";

  constructor(private http: HttpClient) {

  }

  getData() {
    return this.http.get(this.apiurl);
  }
}
