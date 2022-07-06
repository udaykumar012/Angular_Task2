import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActiveModule } from './active/active.module';
import { AppRoutingModule, routingcomponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { DeletedModule } from './deleted/deleted.module';


@NgModule({
  declarations: [
    AppComponent,
    routingcomponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActiveModule,
    DeletedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
