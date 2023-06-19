import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Principal',
  templateUrl: './Principal.component.html',
  styleUrls: ['./Principal.component.scss']
})

export class Principalcomponent implements OnInit {
    ngOnInit(): void {
        console.log("Iniciamos el componente pricnipal")
    }
}