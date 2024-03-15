import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//componentes
import { AppComponent } from './app.component';
import { NavbarClclComponent } from './components/navbar-clcl/navbar-clcl.component';
import { ConvertidorClclComponent } from './components/convertidor-clcl/convertidor-clcl.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarClclComponent,
    ConvertidorClclComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
