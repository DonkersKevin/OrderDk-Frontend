import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import {RouterOutlet} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  exports: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
