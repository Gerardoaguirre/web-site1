// import { AuthGuard } from "../../auth/guards/auth.guard";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { Flexboxcomponent,  } from './Flexbox.component';
import { maquetacion1component } from './pagina/maquetacion1.component';




const routes: Routes = [
  {
    path: '',
    component: Flexboxcomponent, //componente padre
    // canActivate:[AuthGuard],
    children: [
      { path: 'maquetacion1', component : maquetacion1component }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlexboxRoutingModule { }