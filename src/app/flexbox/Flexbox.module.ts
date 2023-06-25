import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Flexboxcomponent } from './Flexbox.component';
import { maquetacion1component } from './pagina/maquetacion1.component';
import { FlexboxRoutingModule } from './Flexbox-routing.module';

// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    // FooterComponent
    Flexboxcomponent,
    maquetacion1component
  ],
  imports: [
    // BrowserModule,
    RouterModule,
    FlexboxRoutingModule
    // AppRoutingModule
  ],
  exports:[
    // FooterComponent
  ],
  providers: []     
//   bootstrap: [FooterComponent]
})
export class FlexboxModule { }