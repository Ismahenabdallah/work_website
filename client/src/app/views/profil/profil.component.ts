
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
  POSTS: any;
  page: number = 0;
  count: number = 0;
  jobs: any = []
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];



  getJ: Subscription = new Subscription;
  term:any

  filtertable:any
  filterTerm:any
filteredCars:any=[]
  constructor(
    private toastr: ToastrService,
    private share: AuthserviceService,
    private s: ServicesService
  ) {
    if (this.share.LoggedIn()) {
      this.share.getProfile();
      this.profil = this.share.getProfile();
      this.getall = this.s.getAllusers().subscribe((data) => {
        //console.log('users', data);
        this.users = data;
        this.img = this.profil.email.slice(0, 1);
      });



    }
    this.fetchJobs();
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



  fetchJobs(): void {
    this.getJ=this.s.getJobs().subscribe((data: any) => {

      //const found = data.find((element:any) => element.categories == 'Mobile');
      //const found = data.findIndex((element:any) => element.categories == 'Mobile');
      //console.log('found', found)


      this.jobs = data;
      // data.forEach((element: any) => {
      //   if (element.categories == "Mobile") {

      //     this.Mobile = this.Mobile + 1;
      //   }
      //   if (element.categories == "Full-stack") {

      //     this.Full_stack = this.Full_stack + 1;
      //   }
      //   if (element.categories == "Jeux vidéo") {

      //     this.Jeux_video = this.Jeux_video + 1;
      //   }
      //   if (element.categories == "Cybersécurité") {

      //     this.Cybersecurite = this.Cybersecurite + 1;
      //   }
      //   if (element.categories == "Systèmes embarqués") {

      //     this.Systemes_embarques= this.Systemes_embarques + 1;
      //   }
      //   if (element.categories == "Data science") {

      //     this.Data_science = this.Data_science + 1;
      //   }
      //   if (element.categories == "Front-end") {

      //     this.Front_end = this.Front_end + 1;
      //   }
      //   if (element.categories == "DevOps") {

      //     this.DevOps = this.DevOps + 1;
      //   }
      //   if (element.categories == "Back-end") {

      //     this.Back_end = this.Back_end + 1;
      //   }







      // });

    }


    )
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchJobs();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchJobs();
  }

  filter(){
    if(this.filterTerm){
      this.filteredCars = this.jobs.filter(
        (car:any) =>{
          return JSON.stringify(car).toLowerCase().includes(this.filterTerm.toLowerCase());
        })
    } else {
      this.filteredCars = this.jobs
    }
  }
}
