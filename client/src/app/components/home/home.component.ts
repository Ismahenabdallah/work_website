
import { Component } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  img=""
  profil = {
    _id: '',
    email: '',
    nom:"",
    prenom:"",
    photo: '',
    telephone: '',
    objectif: '',
    cv: '',
    numbre_apply: [],
    status:"",
    adresse:""
  };
  constructor(private share:AuthserviceService ) {

    if(this.share.LoggedIn()){
      this.profil._id=this.share.getProfile()._id
      this.profil.email=this.share.getProfile().email
      this.profil.nom=this.share.getProfile().nom
      this.profil.prenom=this.share.getProfile().prenom
      this.profil.photo=this.share.getProfile().photo
      this.profil.telephone=this.share.getProfile().telephone
      this.profil.objectif=this.share.getProfile().objectif
      this.profil.cv=this.share.getProfile().cv
      this.profil.adresse=this.share.getProfile().adresse
      this.profil.numbre_apply=this.share.getProfile().numbre_apply
      this.profil.status=this.share.getProfile().status
      this.profil.adresse=this.share.getProfile().adresse


      this.img=this.profil.nom.slice(0, 1)
      // console.log(this.profil)
     }
  }


}
