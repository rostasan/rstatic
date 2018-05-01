import { User } from './../../models/auth-form';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rememberMe: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }

  createUser(user: User) {
    console.log('create account', user);
  }
  loginUser2(user: User) {
    console.log('Login', user, this.rememberMe);
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.getElementById('username');
    const password = target.getElementById('password');
    console.log(username, password);
  }
}
