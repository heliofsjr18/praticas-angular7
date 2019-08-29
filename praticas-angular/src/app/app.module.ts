import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

import {MatFormFieldModule, matFormFieldAnimations} from '@angular/material/form-field';
import {MatButtonModule, MatSelectModule, MatTableModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HelioComponent } from './helio/helio.component';
import { PauloComponent } from './paulo/paulo.component';
import { IsabellaComponent } from './isabella/isabella.component';
import { UsertableComponent } from './usertable/usertable.component';

@NgModule({
  declarations: [
    AppComponent,
    IsabellaComponent,
    PauloComponent,
    HelioComponent,
    UsertableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatGridListModule,
    NgbModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    BrowserModule,
  
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
