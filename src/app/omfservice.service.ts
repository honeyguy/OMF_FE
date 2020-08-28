import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './shared/user';
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class OMFServiceService {

  private apiURL = "https://reqres.in";


  constructor(private http: HttpClient) {

  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getData() {
    return this.http.get(this.apiURL);
  }

  getOrderById(productId: String): Observable<User> {
    return this.http.get<User>(this.apiURL + '/api/users/' + productId)
      .pipe(
        retry(1),
        catchError(error => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          window.alert(errorMessage);
          return throwError(errorMessage);
        })
      )
  }


  getUserList(): Observable<User> {
    return this.http.get<User>(this.apiURL + '/api/users?page=2')
      .pipe(
        retry(1),
        catchError(error => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          window.alert(errorMessage);
          return throwError(errorMessage);
        })
      )
  }


}
