import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})

export class boxcomponent implements OnInit {

    ngOnInit(): void {
        console.log("Iniciamos el componente Flexbox hijo")
        
    }
}