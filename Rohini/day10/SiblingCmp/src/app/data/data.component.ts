import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { ShareserviceService } from '../service/shareservice.service';
import { IPosts } from './post-model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  posts  = [] as IPosts[];
  tempPosts = [] as IPosts[];
 

  constructor(private _dataService : DataserviceService, private _shareService :ShareserviceService) { }

  ngOnInit(): void {
    this.loadPosts();

    this._shareService.searchKey.subscribe({
      next: (data) => this.filterData(data),
      error: err => console.log(err)
    });
}
    public loadPosts(){
      this._dataService.getdata("https://jsonplaceholder.typicode.com/posts").subscribe(
        {
          next:data =>{
          this.posts = data as IPosts[];
          this.tempPosts = this.posts;
          },
          error: err => console.log(err),
          complete: () => console.log("Completed")
        });
        }
        public filterData(searchKey: any) {
          this.posts = this.tempPosts.filter((post) => {
            if (post.title.indexOf(searchKey) != -1)
              return post;
            else
              return null;
          });
        }

    }
  