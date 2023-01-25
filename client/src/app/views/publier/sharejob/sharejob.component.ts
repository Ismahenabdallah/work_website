import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-sharejob',
  templateUrl: './sharejob.component.html',
  styleUrls: ['./sharejob.component.css']
})
export class SharejobComponent  {

editorConfig: AngularEditorConfig = {
  editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
    {
      name: 'quote',
      class: 'quote',
    },
    {
      name: 'redText',
      class: 'redText'
    },
    {
      name: 'titleText',
      class: 'titleText',
      tag: 'h1',
    },
  ],
  uploadUrl: 'v1/image',

};

  constructor( private s: ServicesService ,private t : ToastrService) {

   }
   Add(f:any){
    this.s.publier(f.value).subscribe({
      next:(res:any)=>{

        this.t.success(res.message)



      },
      error:(err:HttpErrorResponse)=>{
        this.t.error(err.error.msg)
        //console.log(err)
      }


    })

   }



}
