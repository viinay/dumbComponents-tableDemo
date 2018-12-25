import { Routes,RouterModule } from '@angular/router';
import { ListFormsComponent } from './list-forms/list-forms.component';
import { UserFormsComponent } from './user-forms/user-forms.component';

var routes:Routes = [{
    path:'',
    redirectTo:'list', //if no leading '/' then its a relative path
    // pathMatch:'full'
},{
    path:'list',
    component:ListFormsComponent
},{
    path:'list/user/:userToken',
    component:UserFormsComponent
},{
    path:'**',
    redirectTo:'list'
}]

export const formsRoutes = RouterModule.forChild(routes);