import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
// import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { User } from '../models/user.model';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  // tslint:disable-next-line: no-use-before-declare
  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name', 'email', 'telefone', 'idade', 'cpf', 'rua', 'cidade', 'estado' ];
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.userService.getUser();
  }
  disconnect() {}
}

