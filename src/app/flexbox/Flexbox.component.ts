import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'Flexbox',
  templateUrl: './Flexbox.component.html',
  styleUrls: ['./Flexbox.component.scss']
})

export class Flexboxcomponent implements OnInit {
  constructor(private router:Router){

  }
    ngOnInit(): void {
        console.log("Iniciamos el componente Flexbox y reedirigimos")
        this.router.navigate(["/Flexbox/maquetacion1"])
    }
}