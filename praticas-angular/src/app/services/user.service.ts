import { IsabellaComponent } from './../isabella/isabella.component';
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
   postUser(contato: any) {
    return this.http.post(this.serviceUrl, contato);
   }
}

