import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'BEM',
  templateUrl: './BEM.component.html',
  styleUrls: ['./BEM.component.scss']
})

export class BEMcomponent implements OnInit {
  constructor(private router:Router){

  }
    ngOnInit(): void {
        console.log("Iniciamos el componente Flexbox y reedirigimos")
        this.router.navigate(["/BEM/metodologia"])
    }
}