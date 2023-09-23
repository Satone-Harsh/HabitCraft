import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './myComponents/list/list.component';
import { ItemComponent } from './myComponents/item/item.component';
import { FormsModule } from '@angular/forms';
import { UseComponent } from './myComponents/use/use.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    UseComponent
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
