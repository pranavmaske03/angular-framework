import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvellousService } from './marvellous.service';
import { HttpClientModule } from '@angular/common/http';
import { BatchNamesComponent } from './batch-names/batch-names.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [
    AppComponent,
    BatchNamesComponent,
    BatchDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ButtonsModule
  ],
  providers: [
    provideClientHydration(),
    MarvellousService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
