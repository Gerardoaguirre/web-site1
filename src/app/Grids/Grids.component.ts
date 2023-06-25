import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'Grids',
  templateUrl: './Grids.component.html',
  styleUrls: ['./Grids.component.scss']
})

export class Gridscomponent implements OnInit {
  constructor(private router:Router){

  }
    ngOnInit(): void {
        console.log("Iniciamos el componente Grids y reedirigimos")
        this.router.navigate(["/Grids/maquetacionGrid"])
    }
}