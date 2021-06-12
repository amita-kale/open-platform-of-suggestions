import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userinfo = [];

  constructor() {}

  addUserData(user) {
    this.userinfo.push(user);
  }
  getUserInfo() {
    return this.userinfo;
  }
  delUser(i) {
    this.userinfo.splice(i, 1);
  }
  updateUser(index, student) {
    this.userinfo[index] = student;
  }
  getSpecificUserByIndex(index) {
    return this.userinfo[index];
  }
}
