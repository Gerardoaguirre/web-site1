// import { AuthGuard } from "../../auth/guards/auth.guard";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { Gridscomponent,  } from './Grids.component';
import { maquetacionGridcomponent } from './pagina/maquetacionGrid.component';





const routes: Routes = [
  {
    path: '',
    component: Gridscomponent, //componente padre
    // canActivate:[AuthGuard],
    children: [
      { path: 'maquetacionGrid', component : maquetacionGridcomponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridsRoutingModule { }