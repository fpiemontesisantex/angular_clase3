import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-directiva-for',
  templateUrl: './prueba-directiva-for.component.html',
  styleUrls: ['./prueba-directiva-for.component.css']
})
export class PruebaDirectivaForComponent implements OnInit {
  listado = [
    	'Juan', 
      'María', 
      'Pepe'
  ];

  listadoPersona = [
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
