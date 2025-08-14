import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';


export const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' }, // default path
  { path: 'about', component: LandingComponent, pathMatch: 'full' }, // default path
  { path: 'contact', component: LandingComponent, pathMatch: 'full' }, // default path
  { path: 'experience', component: LandingComponent, pathMatch: 'full' } // default path
];
