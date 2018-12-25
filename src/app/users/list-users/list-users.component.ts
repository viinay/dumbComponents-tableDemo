import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Users } from '../users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  _users:Users[];
  _selectedUser:Users[]=[];

  _actions = [{
    name:'sendmail',
    cond:'mail_verified',
    shouldBe:false
  },{
    name:'call',
    cond:'user_token',
    shouldBe:'SkqmvdM-X'
  }]

  constructor(
    private _api:ApiService,
    private _router:Router
  ) { }

  ngOnInit() {
    this._api.getUsers()
      .subscribe((res:{data:Users[]})=>{
        this._users=res.data
      })
  }

  onRowClick(rowEvent){
    switch(rowEvent.event){
      case 'call':
        console.log('call event')
        break;
      
      case 'sendmail':
        console.log('sendmail event')
        break;
      
      case 'checkbox:checked':
        console.log('checkbox:checked')
        this._selectedUser.push(rowEvent.row)
        break;
      
      case 'checkbox:unchecked':
        console.log('checkbox:unchecked')
        this._selectedUser = this._selectedUser.filter(user=>user._id != rowEvent.row._id)
        break;

      case 'click':
        console.log('click event')
        break;
      
      default: console.log('no such event !')
    }
    console.log('selected user:',this._selectedUser)
    // this._router.navigateByUrl('/users/edit')
  }

  onShowFormClick(user:Users){
    this._router.navigateByUrl(`/forms/user/${user.user_token}`)
  }
}
