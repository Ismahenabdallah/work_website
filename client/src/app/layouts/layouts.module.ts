import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechercheComponent } from './recherche/recherche.component';
import { PuplierComponent } from './puplier/puplier.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { BodyComponent } from '../components/body/body.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';





@NgModule({
  declarations: [
    RechercheComponent,
    PuplierComponent,
    SidenavComponent,
    BodyComponent,


  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule,
  ]
})
export class LayoutsModule { }
