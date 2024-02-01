import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { JoinComponent } from './join/join.component';
import { PartnersComponent } from './partners/partners.component';


const routes: Routes = [
{path:'', redirectTo:'main',pathMatch:'full'},
{path: 'main', component: MainComponent},
{path: 'about', component: AboutComponent},
{path: 'join', component: JoinComponent},
{path: 'partners', component: PartnersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
