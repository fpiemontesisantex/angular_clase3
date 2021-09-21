import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevaPersonaComponent } from './nueva-persona/nueva-persona.component';
import { ListadoPersonaComponent } from './listado-persona/listado-persona.component';
import { EditarPersonaComponent } from './editar-persona/editar-persona.component';
import { PruebaDirectivaClassComponent } from './prueba-directiva-class/prueba-directiva-class.component';
import { PruebaDirectivaStyleComponent } from './prueba-directiva-style/prueba-directiva-style.component';
import { PruebaTwoWayBindingComponent } from './prueba-two-way-binding/prueba-two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { PruebaDirectivaIfComponent } from './prueba-directiva-if/prueba-directiva-if.component';
import { PruebaDirectivaForComponent } from './prueba-directiva-for/prueba-directiva-for.component';
import { PruebaDirectivaSwitchComponent } from './prueba-directiva-switch/prueba-directiva-switch.component';
import { PruebaDirectivaTemplateComponent } from './prueba-directiva-template/prueba-directiva-template.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevaPersonaComponent,
    ListadoPersonaComponent,
    EditarPersonaComponent,
    PruebaDirectivaClassComponent,
    PruebaDirectivaStyleComponent,
    PruebaTwoWayBindingComponent,
    PruebaDirectivaIfComponent,
    PruebaDirectivaForComponent,
    PruebaDirectivaSwitchComponent,
    PruebaDirectivaTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
