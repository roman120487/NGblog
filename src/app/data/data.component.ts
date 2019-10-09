import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  title: string;
  author: string;
  text: string;
  id: number;
  posts: Array<any>;
  users: Array<any>;
  userName: string;
  userEmail: string;
  userPassword: string;
  emailValid: string;
  passValid: string;
  date: any;
  validationdUser: boolean;

  invalidLogin: boolean;
  isEmptyPlace: boolean;

  constructor() {
    this.posts = [];
    this.users = [];
  }

  ngOnInit() {
  }

  addPost(): void {
    const newPost: IPost = new Post(1, this.title, this.author, this.text)
    if (this.posts.length > 0) {
      newPost.id = this.posts.slice(-1)[0].id + 1;
    }
    this.posts.push(newPost)
    console.log(this.posts);

    this.date = new Date();
    // tslint:disable-next-line: max-line-length
    this.date = `${this.date.getHours()}:${this.date.getMinutes()}, ${this.date.getDate()}.${this.date.getMonth() + 1}.${this.date.getFullYear()} `;
  }

  createNewUser(): void {
    const newUser: IUser = new User(1, this.userName, this.userEmail, this.userPassword);
    if (this.users.length > 0) {
      newUser.id = this.users.slice(-1)[0].id + 1;
    }
    this.users.push(newUser);
    this.userEmail = '';
    this.userName = '';
    this.userPassword = '';
    // console.log(this.users);
  }


  validUser(): void {
    if (this.emailValid == '' && this.passValid == '') {
      this.isEmptyPlace = true;
    }
    else{
      this.isEmptyPlace = false;
    }

    const email = this.emailValid;
    const pass = this.passValid;
    let authorTemp;
    // tslint:disable-next-line: only-arrow-functions
    this.validationdUser = this.users.some(function (e: any): boolean {
      authorTemp = e.userName;
      return e.userEmail === email && e.userPassword === pass;
    });
    this.author = authorTemp;
  }

}

interface IPost {
  id: number;
  title: string;
  author: string;
  text: string;
}

class Post implements IPost {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public text: string
  ) { }
}


interface IUser {
  id: number;
  userName: string;
  userEmail: string;
  userPassword: string;
}


class User implements IUser {
  constructor(
    public id: number,
    public userName: string,
    public userEmail: string,
    public userPassword: string,
  ) { }
}
