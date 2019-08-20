import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private serviceUrl = 'http://localhost:3000/pessoa';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }
  // postUser(): Observable<User[]>{
  //   return this.http.post<User[]>(this.serviceUrl,{nome:'teste', idade:10});
  // }
  // postJSON() {
  //   var json = JSON.stringify({var1: 'teste', var2: 1000});
  //   // var params = 'json=' + json;
  //   // var cabe = new Headers();
  //   // cabe.append('Content-Type', 'application/x-www-form-urlencoded');
  //   return this.http.post('http://validate.jsontest.com',json);
  //   }
}

