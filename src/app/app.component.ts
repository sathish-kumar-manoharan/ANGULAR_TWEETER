import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import {
    CREATE_USER_FAILURE_MESSAGE,
    CREATE_USER_REQUIRED_ERROR_MESSAGE,
    CREATE_USER_SUCCESS_MESSAGE,
    GET_USER_URL,
    POST_MESSAGE_FAILURE_MESSAGE,
    POST_MESSAGE_SUCCESS_MESSAGE,
    USER_NOT_FOUND_MESSAGE,
    UNFOLLOW_USER_MESSAGE_SUCCESS_MESSAGE,
} from './shared/constants';
import { User } from './shared/user';
import { TweeterService } from './service/tweeter/tweeter.service';
import { Message } from './shared/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TweeterService]
})
export class AppComponent implements OnInit {
  constructor( private http: Http, private tweeterService: TweeterService) {
  }

  title = 'Tweeter app';
  userName = '';
  errorMsg = '';
  user: User;
  showProfile: boolean;
  genders = ['male', 'female', 'transgender'];
  messages: Array<Message> = [];
  followers: Array<any> = [];
  following: Array<any> = [];
  message: string;
  userNameStr: string;
  firstNameStr: string;
  lastNameStr: string;
  age: number;
  gender: any;
  email: string;
  showSuccess: boolean;
  showFailure: boolean;
  mostPopular: any;
  popularFollowers: Array<any> = [];

  ngOnInit() {
    this.getMostPopularUser();
  }

  searchUser() {
    this.tweeterService.getUser(this.userName)
    .subscribe(
      (response) => {
        this.user = response;
        this.showProfile = true;
        this.getMessages();
        this.getConnections();
        this.errorMsg = '';
        this.message = '';

      },
      (error) => {
        this.showProfile = false;
        this.errorMsg = USER_NOT_FOUND_MESSAGE;
        this.showSuccess = false;
        this.showFailure = true;
        this.showProfile = false;
      }
    );
  }

  getMessages() {
    this.tweeterService.getMessages(this.userName)
    .subscribe(
      (response) => {
        this.messages = response;
      },
      (error) => {
        console.log(error);
        this.messages = [];
      }
    );
  }

  getMostPopularUser() {
    this.tweeterService.getMostPopularUser()
    .subscribe(
      (response) => {
        this.mostPopular = response;
      },
      (error) => {
        console.log(error);
        this.messages = [];
      }
    );
  }

  getMostPopularFollower() {
    this.tweeterService.getMostPopularFollower()
    .subscribe(
      (response) => {
        this.popularFollowers = response;
      },
      (error) => {
        console.log(error);
        this.popularFollowers = [];
      }
    );
  }

  getConnections() {
    this.followers = [];
    this.following = [];
    this.tweeterService.getConnections(this.userName)
    .subscribe(
      (response) => {
        this.followers = response.followers;
        this.following = response.following;
        if (!this.followers) {
          this.followers = [];
        }
        if (!this.following) {
          this.following = [];
        }
        this.getMostPopularFollower();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  postMessages() {
    const messageRequest = {userName: this.userName, content: this.message};
    console.log(messageRequest);
    this.tweeterService.postMessages(messageRequest)
    .subscribe(
      (response) => {
        this.errorMsg = POST_MESSAGE_SUCCESS_MESSAGE;
        this.showSuccess = true;
        this.showFailure = false;
        this.getMessages();
      },
      (error) => {
        console.log(error);
        this.errorMsg = POST_MESSAGE_FAILURE_MESSAGE;
        this.showSuccess = false;
        this.showFailure = true;
      }
    );
  }

  unFollowUser(userName: string, unFollowUser: string) {
    const messageRequest = {userName: this.userName, content: this.message};
    console.log(messageRequest);
    this.tweeterService.unfollow(userName,unFollowUser)
    .subscribe(
      (response) => {
        this.errorMsg = UNFOLLOW_USER_MESSAGE_SUCCESS_MESSAGE;
        this.showSuccess = true;
        this.showFailure = false;
        this.getConnections();
      },
      (error) => {
        console.log(error);
        this.errorMsg = POST_MESSAGE_FAILURE_MESSAGE;
        this.showSuccess = false;
        this.showFailure = true;
      }
    );
  }

  createUser() {
    console.log('triggered');
    if (this.userNameStr && this.userNameStr.trim().length > 0 &&
      this.firstNameStr && this.firstNameStr.trim().length > 0 &&
      this.lastNameStr && this.lastNameStr.trim().length > 0 ) {
      const userRequest = {
        userName: this.userNameStr,
        firstName: this.firstNameStr,
        lastName: this.lastNameStr,
        age: this.age,
        gender: this.gender,
        email: this.email
      };
      this.tweeterService.createUser(userRequest)
      .subscribe(
        (response) => {
          this.errorMsg = CREATE_USER_SUCCESS_MESSAGE;
          this.showSuccess = true;
          this.showFailure = false;
          this.clearUserCreation();
        },
        (error) => {
          console.log(error);
          this.errorMsg = CREATE_USER_FAILURE_MESSAGE;
          this.showSuccess = false;
          this.showFailure = true;
        }
      );
    }else {
      this.errorMsg = CREATE_USER_REQUIRED_ERROR_MESSAGE;
      this.showSuccess = false;
      this.showFailure = true;
    }
  }

  clearUserCreation() {
    this.userNameStr = '';
    this.firstNameStr = '';
    this.lastNameStr = '';
    this.age = 0;
    this.gender = 'male';
    this.email = '';
  }

  openTab(evt, tabName) {
    let i, x, tablinks;
    x = document.getElementsByClassName('tab');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablink');
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' w3-red', "");
    }
    document.getElementById(tabName).style.display = 'block';
    // evt.target.className += ' w3-red';
}



}
