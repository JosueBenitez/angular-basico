import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { moduleHeroes } from './heroes/heroes.module';
import { contadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    moduleHeroes,
    contadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
