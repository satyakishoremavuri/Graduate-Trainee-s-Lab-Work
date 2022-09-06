import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

import { IPosts } from '../post-model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy{
  posts = [ ] as IPosts [];
  subscription! : Subscription;


  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.loadposts();
  }
  loadposts(){
   this.subscription= this.http.getData("https://jsonplaceholder.typicode.com/posts").subscribe({
      next:(data)=>{
        this.posts = data as IPosts[];
      },

      error:(reason)=>console.log(reason),
      complete:()=>console.log("completed")
    });
  }
  ngOnDestroy():void{
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}
