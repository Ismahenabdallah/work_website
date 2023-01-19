import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechercheComponent } from './recherche/recherche.component';
import { PuplierComponent } from './puplier/puplier.component';



@NgModule({
  declarations: [
    RechercheComponent,
    PuplierComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
