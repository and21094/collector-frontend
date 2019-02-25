import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError  } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/of';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../models/ApiResponse';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Service {

  public currentUser: any;
  public token: string;
  // public user: string;
  protected prefix: string;

  public headers = new HttpHeaders({});
  public headersFormDatas = new HttpHeaders({});
  public headers_file = new HttpHeaders({});

  constructor(protected _httpClient: HttpClient) {
    if (localStorage.getItem('collectorUser') && localStorage.getItem('collectorUser') !== undefined) {
      this.currentUser = JSON.parse(localStorage.getItem('collectorUser'));
      this.token = this.currentUser && this.currentUser.token;
      ​
      this.headers = new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      });
   ​
     } else {
       this.headers = new HttpHeaders({
       'Content-type': 'application/json',
      });
     }
  }

  getAll(): Observable<any> {
    const headers = this.headers;

    return this._httpClient.get(`${environment.apiUrl}/${this.prefix}?user=${this.currentUser.user}`, { headers })
    .pipe(map((response: ApiResponse) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
