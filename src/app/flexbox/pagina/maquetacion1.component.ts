import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'maquetacion1',
  templateUrl: './maquetacion1.component.html',
  styleUrls: ['./maquetacion1.component.scss']
})

export class maquetacion1component implements OnInit {

    ngOnInit(): void {
        console.log("Iniciamos el componente Flexbox hijo")
        
    }
}