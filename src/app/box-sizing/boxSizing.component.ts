import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'boxSizing',
  templateUrl: './boxSizing.component.html',
  styleUrls: ['./boxSizing.component.scss']
})

export class boxSizingcomponent implements OnInit {
  constructor(private router:Router){

  }
    ngOnInit(): void {
        console.log("Iniciamos el componente Flexbox y reedirigimos")
        this.router.navigate(["/BoxSizing/caja"])
    }
}