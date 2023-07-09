import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'metodologia',
  templateUrl: './metodologia.component.html',
  styleUrls: ['./metodologia.component.scss']
})

export class metodologiacomponent implements OnInit {

    ngOnInit(): void {
        console.log("Iniciamos el componente Flexbox hijo")
        
    }
}