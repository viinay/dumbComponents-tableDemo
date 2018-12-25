import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http:HttpClient
  ) { }

  getUsers(){
    return this._http.get('http://localhost:3022/users/a6sfd64as45fds6a54fs3d5fa1s53d')
  }
}
