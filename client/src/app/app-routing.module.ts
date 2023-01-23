import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GuardAuthGuard } from './guards/guard-auth.guard';
import { PuplierComponent } from './layouts/puplier/puplier.component';
import { RechercheComponent } from './layouts/recherche/recherche.component';
import { ProfilComponent } from './views/profil/profil.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"home", component:HomeComponent},
  {path:"", component:HomeComponent},
  {path:"profil",component:ProfilComponent,canActivate:[GuardAuthGuard]},
  {path:"recherche", component:RechercheComponent , children:[
    {path:"categories" , loadChildren:()=>import('./views/recherche/categories/categories.module').then(m=>m.CategoriesModule)}

  ]},
  {path:"publier", component:PuplierComponent ,canActivate:[GuardAuthGuard], children:[
    {path:"" , loadChildren:()=>import('./views/publier/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:"dash" , loadChildren:()=>import('./views/publier/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:"job" , loadChildren:()=>import('./views/publier/sharejob/sharejob.module').then(m=>m.SharejobModule)},


  ]},
  {path:"**", component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
