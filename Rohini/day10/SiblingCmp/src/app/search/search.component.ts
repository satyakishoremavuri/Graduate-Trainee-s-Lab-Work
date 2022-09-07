import { Component, OnInit } from '@angular/core';
import { ShareserviceService } from '../service/shareservice.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchKey:string ="";

  constructor(private _shareService: ShareserviceService) { }

  ngOnInit(): void {
  }
  public setsearchKey(){
    this._shareService.searchKey.next(this.searchKey)
  }

}
