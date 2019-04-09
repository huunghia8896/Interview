import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateTimeFormatPipe } from './pipe/date-time-format.pipe';
import { ShortenedNamePipe } from './pipe/shortened-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DateTimeFormatPipe,
    ShortenedNamePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
