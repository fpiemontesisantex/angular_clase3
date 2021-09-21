import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-directiva-switch',
  templateUrl: './prueba-directiva-switch.component.html',
  styleUrls: ['./prueba-directiva-switch.component.css']
})
export class PruebaDirectivaSwitchComponent implements OnInit {
  listado = [
    {
      nombre: 'Pepe',
      apellido: 'Juarez' 
    },
    {
      nombre: 'Romina',
      apellido: 'Ramirez' 
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
