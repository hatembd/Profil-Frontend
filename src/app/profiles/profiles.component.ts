import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServiceProfileService} from "../services/service-profile.service";



@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  public profils:any=undefined;
  public size:number=5;
  public currentPage:number=0;
  public totalPages: number | undefined;
  public pages: Array<number> | undefined;
  private currentKeyword: string="";
  constructor(private catService:ServiceProfileService)  {}

  ngOnInit()  {
  }


  onGetProfiles() {
    this.catService.getProfils(this.currentPage,this.size)
      .subscribe(data=>{
         // @ts-ignore
        this.totalPages=data["page"].totalPages; this.pages=new Array<number>(this.totalPages); this.profils=data;
     },err=>{
        console.log(err);
      });

        }

  onPageProfiles(i: number) {
   this.currentPage=i;
   this.chercherProfils();
}
// @ts-ignore
  onChercher(form: any) {
       this.currentPage=0;
       this.currentKeyword=form.keyword;
       this.chercherProfils();

  }
  chercherProfils(){
    this.catService.getProfilsByKeyword(this.currentKeyword,this.currentPage,this.size)
      .subscribe(data=>{
        // @ts-ignore
        this.totalPages=data["page"].totalPages; this.pages=new Array<number>(this.totalPages); this.profils=data;
      },err=>{
        console.log(err);
      });
  }

  onDeleteProfils(p: any) {
    let conf=confirm("Etes vous sûre?");
    if(conf) {
      this.catService.deleteResource(p._links.self.href)
        .subscribe(data=>{
          this.chercherProfils();
        },error => {
          console.log(error);
        })}

  }
}
