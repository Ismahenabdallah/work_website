import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent {
  img = '';
  profil = {
    _id: '',
    email: '',
    nom: '',
    prenom: '',
    photo: '',
    telephone: '',
    objectif: '',
    cv: '',
    numbre_apply: [],
    status: '',
    adresse: '',
  };
  getall: Subscription | undefined;
  users: any = [];
  constructor(
    private toastr: ToastrService,
    private share: AuthserviceService,
    private s: ServicesService
  ) {
    if (this.share.LoggedIn()) {
      this.share.getProfile();
      this.profil = this.share.getProfile();
      this.getall = this.s.getAllusers().subscribe((data) => {
        console.log('users', data);
        this.users = data;
        this.img = this.profil.email.slice(0, 1);
      });


      // console.log(this.profil)
    }
  }
  update(form: any) {
    let data = form.value;
    this.s.updateProfil(data).subscribe((res: any) => {
      let indexId = this.users.findIndex(
        (obj: any) => obj._id == this.profil._id
      );
      this.users[indexId]._id = res._id;
      this.users[indexId].email = res.email;
      this.users[indexId].prenom = res.prenom;
      this.users[indexId].status = res.status;
      this.users[indexId].cv = res.cv;
      this.users[indexId].telephone = res.telephone;
      this.users[indexId].adresse = res.adresse;
      this.users[indexId].nom = res.nom;
      this.users[indexId].objectif = res.objectif;
      this.users[indexId].photo = res.photo;
      this.users[indexId].numbre_apply = res.numbre_apply;

      this.toastr.success('update', '', {
        timeOut: 3000,
      });
    });
  }

  getprofil() {
    this.s.getProfil().subscribe((res: any) => {
      console.log('get', res);
      ///this.profil = res;
    });
  }
}
