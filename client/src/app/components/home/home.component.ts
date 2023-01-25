
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { ServicesService } from 'src/app/services/services.service';

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
  jobs: any = []
  Jeux_video= 0;
  Systemes_embarques: number = 0;
  Cybersecurite: number = 0;
  Mobile: number = 0;
  Data_science: number = 0;
  DevOps: number = 0;
  Front_end: number = 0;
  Back_end: number = 0;
  Full_stack: number = 0;
  getJ: Subscription = new Subscription;
  constructor(private share:AuthserviceService , private s: ServicesService ) {

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


      this.img=this.profil.nom.slice(0, 1)}

      this.getJ=this.s.getJobs().subscribe((data: any) => {
        console.log('jobs', data);
        //const found = data.find((element:any) => element.categories == 'Mobile');
        //const found = data.findIndex((element:any) => element.categories == 'Mobile');
        //console.log('found', found)


        this.jobs = data;
        data.forEach((element: any) => {
          if (element.categories == "Mobile") {

            this.Mobile = this.Mobile + 1;
          }
          if (element.categories == "Full-stack") {

            this.Full_stack = this.Full_stack + 1;
          }
          if (element.categories == "Jeux vidéo") {

            this.Jeux_video = this.Jeux_video + 1;
          }
          if (element.categories == "Cybersécurité") {

            this.Cybersecurite = this.Cybersecurite + 1;
          }
          if (element.categories == "Systèmes embarqués") {

            this.Systemes_embarques= this.Systemes_embarques + 1;
          }
          if (element.categories == "Data science") {

            this.Data_science = this.Data_science + 1;
          }
          if (element.categories == "Front-end") {

            this.Front_end = this.Front_end + 1;
          }
          if (element.categories == "DevOps") {

            this.DevOps = this.DevOps + 1;
          }
          if (element.categories == "Back-end") {

            this.Back_end = this.Back_end + 1;
          }







        });

      }


      )
      // console.log(this.profil)
     }

  ngOnDestroy(): void {
    this.getJ.unsubscribe();
  }

}
