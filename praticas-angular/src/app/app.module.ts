import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelioComponent } from './helio/helio.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PauloComponent } from './paulo/paulo.component';

@NgModule({
  declarations: [
    AppComponent,
    HelioComponent,
    PauloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
