// import { AuthGuard } from "../../auth/guards/auth.guard";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { Principalcomponent } from './Principal.component';
import { Contenido1component } from './Contenido1/Contenido1.component';




const routes: Routes = [
  {
    path: '',
    component: Principalcomponent, //componente padre
    // canActivate:[AuthGuard],
    children: [
      { path: 'Contenido1', component : Contenido1component }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContenidosRoutingModule { }