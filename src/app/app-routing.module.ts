import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditarPersonaComponent } from './editar-persona/editar-persona.component';
import { ListadoPersonaComponent } from './listado-persona/listado-persona.component';
import { NuevaPersonaComponent } from './nueva-persona/nueva-persona.component';

const routes: Routes = [
  { path: 'listado', component: ListadoPersonaComponent },
  { path: 'nueva', component: NuevaPersonaComponent },
  { path: 'editar/:id', component: EditarPersonaComponent }
  // { path: 'editar', component: EditarPersonaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
