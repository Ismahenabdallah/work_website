import { HttpErrorResponse } from '@angular/common/http';
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

  constructor(private share:AuthserviceService , private r : Router,  private toastr: ToastrService,){


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
