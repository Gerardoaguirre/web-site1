import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/HomeComponent.component';
import { Contactocomponent } from './contacto/Contacto.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard]
  },{
    path: 'home',
    component: HomeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'Inicio',
    loadChildren: ()=>import('./contenidos/principal/Principal.module').then(m=>m.Contenido1Module)
  },
  {
    path: 'Flexbox',
    loadChildren: ()=>import('./flexbox/Flexbox.module').then(m=>m.FlexboxModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
