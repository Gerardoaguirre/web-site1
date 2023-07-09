// import { AuthGuard } from "../../auth/guards/auth.guard";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { BEMcomponent  } from './BEM.component';
import {  metodologiacomponent } from './pagina/metodologia.component';




const routes: Routes = [
  {
    path: '',
    component: BEMcomponent, //componente padre
    // canActivate:[AuthGuard],
    children: [
      { path: 'metodologia', component : metodologiacomponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BEMRoutingModule { }