import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceProfileService {

  public host:string="http://localhost:8090";


  constructor(private httpClient:HttpClient) { }

  public getProfils(page:number,size:number) {
    return this.httpClient.get(this.host + "/profils?page=" + page + "&size=" + size);
  }
  public getProfilsByKeyword(mc:string,page:number,size:number){
      return this.httpClient.get(this.host+"/profils/search/byNomPage?mc="+mc+"&page="+page+"&size="+size);
  }
  public deleteResource(url:any) {
    return this.httpClient.delete(url);
  }
  public saveResource(url: string, data: any){
    return this.httpClient.post(url,data);
  }
}
