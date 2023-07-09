import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BEMRoutingModule } from './BEM-routing.module';
import { BEMcomponent } from './BEM.component';
import { metodologiacomponent } from './pagina/metodologia.component';

// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    // FooterComponent
    BEMcomponent,
    metodologiacomponent
  ],
  imports: [
    // BrowserModule,
    RouterModule,
    BEMRoutingModule
    // AppRoutingModule
  ],
  exports:[
    // FooterComponent
  ],
  providers: []     
//   bootstrap: [FooterComponent]
})
export class BEMModule { }