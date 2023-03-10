import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Subscription } from 'rxjs';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnDestroy {
  /***
   *
   *
<!-- <div class=" ">
  <div>
    <h5 class="text-center mt-5 mb-5">Angular Basic Pagination Example</h5>
  </div>
  <div class="pagination shadow p-3 mb-5 bg-white rounded"
    *ngFor=" let j of jobs
        | paginate
          : {
              itemsPerPage: tableSize,
              currentPage: page,
              totalItems: count
            };
      let i = index">

<div class="pagination-1">
  <div>{{j.nom_entreprise}}</div>
  <div>{{j.specialite}}</div>
  <div>{{j.adresse}}</div>
  <div>{{j.telephone}}</div>

</div>
<div class="pagination-2"></div>

    </div>
    <div class="d-flex justify-content-center">
      <pagination-controls
        previousLabel="Prev"
        nextLabel="Next"
        (pageChange)="onTableDataChange($event)"
      >
      </pagination-controls>
    </div>
</div> -->
   */
  POSTS: any;
  disable = false;
  page: number = 0;
  count: number = 0;
  jobs: any = [];
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  users: any = [];

  Jeux_video = 0;
  Systemes_embarques: number = 0;
  Cybersecurite: number = 0;
  Mobile: number = 0;
  Data_science: number = 0;
  DevOps: number = 0;
  Front_end: number = 0;
  Back_end: number = 0;
  Full_stack: number = 0;
  dtOption: DataTables.Settings = {};
  getJ: Subscription = new Subscription();
  getall: Subscription = new Subscription();
  term: any;
  f: any;
  filtertable: any;
  filterTerm: any;
  filteredCars: any = [];

  constructor(
    private t: ToastrService,
    public share: AuthserviceService,
    private r: Router,
    private s: ServicesService
  ) {
    //console.log(this.share.getProfile());
    if (this.share.LoggedIn()) {
      this.share.getProfile();
    }
    this.getall = this.s.getAllusers().subscribe((data) => {
      //console.log('users', data);
      this.users = data;
    });

    this.fetchJobs();


  }

  apply(id: any) {
    if (this.share.LoggedIn()) {
      this.s.applyJobs(id).subscribe({
        next: (res: any) => {
          ///console.log(res);
          this.t.success(res.message);





        },
        error: (err: HttpErrorResponse) => {
          ///console.log(err);
          this.t.error(err.error.message);
        },
      });
    } else {
      this.r.navigate(['/login']);
    }
  }

  fetchJobs(): void {
    this.getJ = this.s.getJobs().subscribe((data: any) => {
      //const found = data.find((element:any) => element.categories == 'Mobile');
      //const found = data.findIndex((element:any) => element.categories == 'Mobile');
      //console.log('found', found)

      this.jobs = data;
      data.forEach((element: any) => {




        if (element.categories == 'Mobile') {
          this.Mobile = this.Mobile + 1;
        }
        if (element.categories == 'Full-stack') {
          this.Full_stack = this.Full_stack + 1;
        }
        if (element.categories == 'Jeux vid??o') {
          this.Jeux_video = this.Jeux_video + 1;
        }
        if (element.categories == 'Cybers??curit??') {
          this.Cybersecurite = this.Cybersecurite + 1;
        }
        if (element.categories == 'Syst??mes embarqu??s') {
          this.Systemes_embarques = this.Systemes_embarques + 1;
        }
        if (element.categories == 'Data science') {
          this.Data_science = this.Data_science + 1;
        }
        if (element.categories == 'Front-end') {
          this.Front_end = this.Front_end + 1;
        }
        if (element.categories == 'DevOps') {
          this.DevOps = this.DevOps + 1;
        }
        if (element.categories == 'Back-end') {
          this.Back_end = this.Back_end + 1;
        }
      });



    });
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

  filter() {
    if (this.filterTerm) {
      this.filteredCars = this.jobs.filter((car: any) => {
        return JSON.stringify(car)
          .toLowerCase()
          .includes(this.filterTerm.toLowerCase());
      });
    } else {
      this.filteredCars = this.jobs;
    }
  }
  ngOnDestroy(): void {
    this.getJ.unsubscribe();
  }
}
