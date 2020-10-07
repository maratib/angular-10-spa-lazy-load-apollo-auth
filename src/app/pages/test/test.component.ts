import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_USERS } from 'src/app/gql';

@Component({
  selector: 'exchange-rates',
  templateUrl: './test.component.html',
    
})
  
  
export class TestComponent implements OnInit {
  users: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: GET_USERS
      })
      .valueChanges.subscribe((result: any) => {
        this.users = result?.data?.allUsers;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}