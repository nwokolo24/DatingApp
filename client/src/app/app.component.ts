import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Dating Site';
  users: any;


  constructor(private http: HttpClient, private accoutService: AccountService) {}

  ngOnInit() {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem("user"));
    this.accoutService.setCurrentUser(user);
  }

  getUsers(){
    this.http.get("https://localhost:5001/api/users").subscribe(resonse => {
      this.users = resonse;
    }, error => {
      console.log(error);
    })
  }
}
