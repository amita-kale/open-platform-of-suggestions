import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userinfo = [];

  constructor(private httpClient: HttpClient) {}

  addUserData(user) {
    return this.httpClient.post('http://localhost:3000/users', user);
  }
  getRoles() {
    return this.httpClient.get('http://localhost:3000/roles');
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
