import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fileName = '';
  avatar:any
  myForm: any;
  imageSrc: any;
  constructor( private http: HttpClient,private share:AuthserviceService , private r : Router,  private toastr: ToastrService,){


  }
  photo:any

  imageHandler = (e:any) => {


    const reader = new FileReader();

    if(e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.myForm.patchValue({
          fileSource: reader.result as string
        });

      };

    }

      }





  onFileSelected(event:any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);

        const upload$ = this.http.post("/api/thumbnail-upload", formData);

        upload$.subscribe();
    }
}

  register(f:any){
    let data=f.value;
    this.share.register(data).subscribe({
      next:(res:any)=>{




          this.toastr.success(res.message,'',{
            timeOut: 3000,
          });
          this.r.navigate(['/login'])
      },
      error:(err:HttpErrorResponse)=>{

        this.toastr.error(err.error.msg)
      }
    })

  }
}
