// import { AuthGuard } from "../../auth/guards/auth.guard";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { boxSizingcomponent  } from './boxSizing.component';
import {  boxcomponent } from './pagina/box.component';




const routes: Routes = [
  {
    path: '',
    component: boxSizingcomponent, //componente padre
    // canActivate:[AuthGuard],
    children: [
      { path: 'caja', component : boxcomponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BEMRoutingModule { }