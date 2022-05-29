import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfilesComponent} from "./profiles/profiles.component";
import {NouveauProfilesComponent} from "./nouveau-profiles/nouveau-profiles.component";

const routes: Routes = [
  {
    path: 'profiles',
    component: ProfilesComponent
  },
  {
    path: 'nouveau-profiles',
    component: NouveauProfilesComponent
  },
  {
    path: '', redirectTo:"/profiles",pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
