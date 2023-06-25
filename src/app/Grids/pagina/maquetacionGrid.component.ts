import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'maquetacionGrid',
  templateUrl: './maquetacionGrid.component.html',
  styleUrls: ['./maquetacionGrid.component.scss']
})

export class maquetacionGridcomponent implements OnInit {

    ngOnInit(): void {
        console.log("Iniciamos el componente Flexbox hijo")
        
    }
}