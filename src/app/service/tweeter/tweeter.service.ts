import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from 'selenium-webdriver/http';
import {
    CREATE_USER_URL,
    GET_CONECTIONS_USER_URL,
    GET_MESSAGES_URL,
    GET_POPULAR_USER_URL,
    GET_USER_URL,
    POST_MESSAGE_URL,
    GET_POPULAR_FOLLOWER_URL,
} from '../../shared/constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { Message } from '../../shared/message';


@Injectable()
export class TweeterService {

  constructor (
    private http: Http
  ) { }

  getUser(userName: string) {
    return this.http.get(GET_USER_URL + userName)
           .map((response: Response) => response.json())
           .catch( this.errorHandler);
  }

  getMostPopularFollower() {
    return this.http.get(GET_POPULAR_FOLLOWER_URL)
           .map((response: Response) => response.json())
           .catch( this.errorHandler);
  }

  getMostPopularUser() {
    return this.http.get(GET_POPULAR_USER_URL)
           .map((response: Response) => response.json())
           .catch( this.errorHandler);
  }

  getConnections(userName: string) {
    return this.http.get(GET_CONECTIONS_USER_URL + userName)
           .map((response: Response) => response.json())
           .catch( this.errorHandler);
  }

  getMessages(userName: string) {
    return this.http.get(GET_MESSAGES_URL + userName)
           .map((response: Response) => response.json())
           .catch( this.errorHandler);
  }

  postMessages(message: any) {
    console.log(message);
    return this.http.post(POST_MESSAGE_URL, message)
           .map((response: Response) => console.log('message posted'))
           .catch( this.errorHandler);
  }

  unfollow(userName: string, unfollowUserName: String) {
    return this.http.post('/tweeter/' + userName + '/unfollow/' + unfollowUserName, null)
           .map((response: Response) => console.log('unfollowed..'))
           .catch( this.errorHandler);
  }

  createUser(user: any) {
    return this.http.post(CREATE_USER_URL, user)
           .map((response: Response) => console.log('user creation call'))
           .catch( this.errorHandler);
  }
  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error || 'Server Error');
  }

}
