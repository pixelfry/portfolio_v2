import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FutureComponent } from './components/future/future.component';


export const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' }, // default path
  { path: 'contact', component: ContactComponent, pathMatch: 'full' }, // contact path
  { path: 'projects', component: ProjectsComponent, pathMatch: 'full' }, // projects path
  { path: 'future', component: FutureComponent, pathMatch: 'full' } // future/about me path
];
