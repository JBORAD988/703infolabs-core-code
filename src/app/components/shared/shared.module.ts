import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimatedBackgroundComponent } from './code-background/code-background.component';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, AnimatedBackgroundComponent],
  imports: [CommonModule, MaterialModule, MatMenuModule,ReactiveFormsModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule { }
