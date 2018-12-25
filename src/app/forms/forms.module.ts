import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFormsComponent } from './list-forms/list-forms.component';
import { formsRoutes } from './forms.routing';
import { UserFormsComponent } from './user-forms/user-forms.component';

@NgModule({
  imports: [
    CommonModule,
    formsRoutes
  ],
  declarations: [ListFormsComponent, UserFormsComponent]
})
export class FormsModule { }
