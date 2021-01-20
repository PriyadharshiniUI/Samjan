import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentComponent } from './comment/comment.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  {
    path:'comment',
    component:CommentComponent
  },
  {
    path:'country',
    component:CountryComponent
  },
 
      
  { 
    path: '**', redirectTo :'/comment', pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
