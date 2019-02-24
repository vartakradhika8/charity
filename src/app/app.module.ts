import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { ContactComponent } from './contact/contact.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    HelloComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
