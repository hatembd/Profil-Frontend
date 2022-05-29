import { Component, OnInit } from '@angular/core';
import {ServiceProfileService} from "../services/service-profile.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nouveau-profiles',
  templateUrl: './nouveau-profiles.component.html',
  styleUrls: ['./nouveau-profiles.component.css']
})
export class NouveauProfilesComponent implements OnInit {

  constructor(private servProf:ServiceProfileService, private router:Router) { }

  ngOnInit(): void {
  }

  onSaveProfil(data: any) {
    this.servProf.saveResource(this.servProf.host+"/profils",data)
      .subscribe(res=>{
        this.router.navigateByUrl("/profils");
      },error => {
        console.log(error);
      })

  }
}
