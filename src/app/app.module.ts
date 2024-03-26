import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared-components/footer/footer.component';
import { BookComponent } from './components/shared-components/book/book.component';
import { RoomsCardComponent } from './components/shared-components/rooms-card/rooms-card.component';
import { ToolbarComponent } from './components/shared-components/toolbar/toolbar.component';
import { ContactsComponent } from './components/shared-components/contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    BookComponent,
    RoomsCardComponent,
    ToolbarComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
