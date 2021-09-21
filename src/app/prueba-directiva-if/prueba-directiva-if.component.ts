import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-directiva-if',
  templateUrl: './prueba-directiva-if.component.html',
  styleUrls: ['./prueba-directiva-if.component.css']
})
export class PruebaDirectivaIfComponent implements OnInit {
  esVisible = true;


  constructor() { }

  ngOnInit(): void {
  }

}
