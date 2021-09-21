import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-directiva-class',
  templateUrl: './prueba-directiva-class.component.html',
  styleUrls: ['./prueba-directiva-class.component.css']
})
export class PruebaDirectivaClassComponent implements OnInit {
  esColorRojo = true;
  enMayuscula = true;

  constructor() { }

  ngOnInit(): void {
  }

}
