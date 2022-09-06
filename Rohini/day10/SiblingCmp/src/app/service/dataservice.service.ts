import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
 

  constructor(private http: HttpClient) { }
  public getdata(url: string){
   return this.http.get(url);

  }
}
