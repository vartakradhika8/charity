import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { SliderComponent } from './slider/slider.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
 {
   path: '',
   component: HomeComponent
 },
 {
   path: 'hello',
   component: HelloComponent
 },
 {
   path: 'slider',
   component: SliderComponent
 },
 {
   path: 'contact',
   component: ContactComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
