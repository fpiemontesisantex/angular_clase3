import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.component.html',
  styleUrls: ['./listado-persona.component.css']
})
export class ListadoPersonaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navegar() {
    this.router.navigate(['editar', 3]);
  }

}
