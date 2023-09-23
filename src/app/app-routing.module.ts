import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './myComponents/list/list.component';
import { UseComponent } from './myComponents/use/use.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'use', component: UseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
