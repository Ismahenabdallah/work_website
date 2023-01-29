import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../components/search.pipe';


// ng g m shared-messenger
@NgModule({
  declarations: [SearchPipe],
  exports:[SearchPipe],
  imports: [
    CommonModule
  ]
})
export class SharedMessengerModule { }
