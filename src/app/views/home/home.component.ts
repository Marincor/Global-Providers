import { Component, OnInit } from '@angular/core';
import { FriendsModel } from 'src/app/interfaces/http.model';
import { FriendsService } from 'src/app/services/friends.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  friends: FriendsModel[] = [];

  constructor(private friendsService: FriendsService) { }

  ngOnInit(): void {
    this.setFriends();
  }

  setFriends () {
    this.friendsService.list().subscribe(res => {
      console.log("20", res)
      this.friends = res;
    })
  }
}
