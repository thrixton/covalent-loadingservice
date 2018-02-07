import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoadFormComponent } from '../load-form/load-form.component';

const routes: Routes = [
  { path: 'form', component: LoadFormComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
