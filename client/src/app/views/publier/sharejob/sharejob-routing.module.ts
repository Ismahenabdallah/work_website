import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharejobComponent } from './sharejob.component';

const routes: Routes = [
  {path:'', component:SharejobComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharejobRoutingModule { }
