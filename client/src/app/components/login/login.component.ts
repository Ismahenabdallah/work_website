import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private share:AuthserviceService , private r : Router,  private toastr: ToastrService,){


    }
    login(f:any){
      let data=f.value

      this.share.login(data).subscribe({
        next:(res)=>{
          let dataToken:any=res

          this.share.saveData(dataToken.token)
          this.share.verifStatus()
          this.share.getName()

          this.r.navigate(["/"])
        },
        error:(err:HttpErrorResponse)=>{

          this.toastr.error(err.error.msg)
        }
      })

    }
}
