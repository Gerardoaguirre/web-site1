import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Principalcomponent } from './Principal.component';
import { RouterModule } from '@angular/router';
import { ContenidosRoutingModule } from './Principal-routing.module';
import { Contactocomponent } from 'src/app/contacto/Contacto.component';
import { MenuComponent } from 'src/app/menu/Menu.component';
import { Contenido1component } from './Contenido1/Contenido1.component';
import { Cabeceracomponent } from 'src/app/cabecera/Cabecera.component';

// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    // FooterComponent
    Principalcomponent,
    Contactocomponent,
    MenuComponent,
    Contenido1component,
    Cabeceracomponent
  ],
  imports: [
    // BrowserModule,
    RouterModule,
    ContenidosRoutingModule
    // AppRoutingModule
  ],
  exports:[
    // FooterComponent
  ],
  providers: []     
//   bootstrap: [FooterComponent]
})
export class Contenido1Module { }