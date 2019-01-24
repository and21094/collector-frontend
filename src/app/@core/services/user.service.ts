import { Injectable } from '@angular/core';
import { Service } from './service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService extends Service {

  protected prefix = 'user';

  constructor(protected httpClient: HttpClient) {
    super(httpClient);

    // eventsService.reloadCurrentUserEvent.subscribe({
    //   next: (event: User) => {
    //     this.currentUser = event;
    //     this.token = event.token;
    //   }
    // });

  }

  public login(email, password) {

    return true;

    // return this.httpClient.post(`${environment.apiUrl}/login`, {'email': email, 'password': password})
    // .map((response) => {
    //   if (response.result === true) {
    //     localStorage.setItem('currentUser', JSON.stringify(response.data));
    //     this.eventsService.reloadCurrentUser(response.data);
    //   }
    //   return response;
    // }).catch((error: any) => {
    //     return this.manageError(error);
    // });
  }

  // logout(): void {
  //   // clear token remove user from local storage to log user out
  //   this.token = null;
  //   localStorage.clear();
  //   localStorage.removeItem('currentUser');
  //   localStorage.setItem('theme', this._theme.theme);
  //   this.intercom.shutdown();
  //   this.intercom.boot({
  //     widget: {
  //       activator: '#intercom'
  //     }
  //   });
  // }

}
