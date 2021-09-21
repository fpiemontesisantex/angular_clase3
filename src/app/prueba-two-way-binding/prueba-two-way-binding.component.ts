import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-two-way-binding',
  templateUrl: './prueba-two-way-binding.component.html',
  styleUrls: ['./prueba-two-way-binding.component.css']
})
export class PruebaTwoWayBindingComponent implements OnInit {
  persona: any = {
    nombre: 'Pepe',
    apellido: 'Juarez'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
