import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharejobRoutingModule } from './sharejob-routing.module';
import { SharejobComponent } from './sharejob.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  declarations: [
    SharejobComponent
  ],
  imports: [
    CommonModule,
    SharejobRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
  ]
})
export class SharejobModule { }
