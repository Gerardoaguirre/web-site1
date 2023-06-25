import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { maquetacionGridcomponent } from './pagina/maquetacionGrid.component';
import { GridsRoutingModule } from './Grids-routing.module';
import { Gridscomponent } from './Grids.component';

// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    // FooterComponent
    Gridscomponent,
    maquetacionGridcomponent
  ],
  imports: [
    // BrowserModule,
    RouterModule,
    GridsRoutingModule
    // AppRoutingModule
  ],
  exports:[
    // FooterComponent
  ],
  providers: []     
//   bootstrap: [FooterComponent]
})
export class GridsModule { }