import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FutureComponent } from './components/future/future.component';


export const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' }, // default path
  { path: 'about', component: LandingComponent, pathMatch: 'full' }, // default path
  { path: 'contact', component: ContactComponent, pathMatch: 'full' }, // default path
  { path: 'projects', component: ProjectsComponent, pathMatch: 'full' }, // default path
  { path: 'future', component: FutureComponent, pathMatch: 'full' } // default path
];
