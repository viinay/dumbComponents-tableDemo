import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userRoutes } from './users.routing';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LftableComponent } from '../components/lftable/lftable.component';

@NgModule({
  imports: [
    CommonModule,
    userRoutes
  ],
  declarations: [ListUsersComponent, EditUserComponent,LftableComponent]
})
export class UsersModule { }
