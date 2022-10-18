import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //title = 'TaxCalculator';

  public users: User[] = [];

  constructor(private UserService: UserService){ }

  ngOnInit(): void {
      this.getUsers();
  }


public getUsers(): void {
  this.UserService.getUsers().subscribe((response: User[]) => {
    this.users = response;
  },
  (error: HttpErrorResponse) => {
    alert(error.message)
  }
  ); 
}
} 



