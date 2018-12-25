import { Routes,RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';

var routes:Routes = [{
    path:'',
    redirectTo:'list', //if no leading '/' then its a relative path
    // pathMatch:'full'
},{
    path:'list',
    component:ListUsersComponent
},{
    path:'edit',
    component:EditUserComponent
},{
    path:'**',
    redirectTo:'list'
}]

export const userRoutes = RouterModule.forChild(routes);