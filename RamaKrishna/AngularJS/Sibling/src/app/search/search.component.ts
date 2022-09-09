import { Component, OnInit } from '@angular/core';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchKey: string = "";

  constructor(private _shareService: ShareService) { }

  ngOnInit(): void {
  }

  public setSearchKey() {
    this._shareService.searchKey.next(this.searchKey);
  }

}
