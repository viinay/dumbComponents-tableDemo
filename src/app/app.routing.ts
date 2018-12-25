import { Routes,RouterModule } from '@angular/router';

var routes:Routes = [{
    path:'',
    redirectTo:'/users',
    pathMatch: 'full'
},{
    path:'users',
    loadChildren:'./users/users.module#UsersModule'
},{
    path:'forms',
    loadChildren:'./forms/forms.module#FormsModule'
},{
    path:'**',
    redirectTo:'/404',
    pathMatch: 'full'
}]

export const appRoutes = RouterModule.forRoot(routes);