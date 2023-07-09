import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BEMRoutingModule } from './boxSizing-routing.module';
import { boxSizingcomponent } from './boxSizing.component';
import { boxcomponent } from './pagina/box.component';

// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    // FooterComponent
    boxSizingcomponent,
    boxcomponent
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
export class BoxSizingModule { }