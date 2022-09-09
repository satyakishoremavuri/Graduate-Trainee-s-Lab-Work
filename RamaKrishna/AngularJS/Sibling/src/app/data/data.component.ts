import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ShareService } from '../services/share.service';
import { IPost } from './post-model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  posts = [] as IPost[];
  tempPosts = [] as IPost[];

  constructor(private _dataService: DataService, private _shareService: ShareService) { }

  ngOnInit(): void {
    this.loadPosts();

    this._shareService.searchKey.subscribe({
      next: (data) => this.filterData(data),
      error: err => console.log(err)
    });
  }

  public loadPosts() {
    this._dataService.getData("https://jsonplaceholder.typicode.com/posts").subscribe(
      {
        next: data => {
          this.posts = data as IPost[];
          this.tempPosts = this.posts;
        },
        error: err => console.log(err),
        complete: () => console.log("Completed")
      });
  }

  public filterData(searchkey: any) {
    this.posts = this.tempPosts.filter((post) => {
      if (post.title.indexOf(searchkey) != -1)
        return post;
      else
        return null;
    });
  }
}
