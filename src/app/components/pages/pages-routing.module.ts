import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'all-projects',component:AllProjectsComponent},
  {path:'contact',component:ContactComponent},
{path:'**',redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
