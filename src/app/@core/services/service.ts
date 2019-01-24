import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service {

  public currentUser: any;
  public token: string;
  protected prefix: string;

  constructor(protected _httpClient: HttpClient) { }

}
