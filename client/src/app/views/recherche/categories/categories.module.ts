import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DataTablesModule } from 'angular-datatables';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/components/search.pipe';




@NgModule({
  declarations: [CategoriesComponent, SearchPipe
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    NgxPaginationModule,
    DataTablesModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,



  ]
})
export class CategoriesModule { }
