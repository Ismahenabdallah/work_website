import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechercheComponent } from './recherche/recherche.component';
import { PuplierComponent } from './puplier/puplier.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    RechercheComponent,
    PuplierComponent,


  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule,
  ]
})
export class LayoutsModule { }
