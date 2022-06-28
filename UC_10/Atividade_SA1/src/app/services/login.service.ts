import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  url = "http://localhost:3000/login"

  login(users: User): Observable<any>{
    return this.httpClient.post(this.url, JSON.stringify(users),{
      headers: new HttpHeaders({'content-type': 'application/json'}),
      observe : "response"

    })
  }
}