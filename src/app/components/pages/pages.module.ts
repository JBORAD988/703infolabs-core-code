import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { CodeGlobComponent } from './animation/code-glob/code-glob.component';
import { ProjectsComponent } from './projects/projects.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { TechnologiesComponent } from './technology/technology.component';
import { DevelopmentProcessComponent } from './development-process/development-process.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    HerosectionComponent,
    CodeGlobComponent,
    ProjectsComponent,
    AllProjectsComponent,
    TechnologiesComponent,
    DevelopmentProcessComponent,
    ContactComponent


  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  exports: [
    HomeComponent ]
    ,  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
