import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelioComponent } from './helio/helio.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PauloComponent } from './paulo/paulo.component';
import { IsabellaComponent } from './isabella/isabella.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './clientes/formulario/formulario.component';
@NgModule({
  declarations: [
    AppComponent,
    IsabellaComponent,
    PauloComponent,
    HelioComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatGridListModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
