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
import { PartOneComponent } from './components/part-one/part-one.component';
import { PartTwoComponent } from './components/home-components/part-two/part-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    BookComponent,
    RoomsCardComponent,
    ToolbarComponent,
    ContactsComponent,
    PartOneComponent,
    PartTwoComponent,
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
