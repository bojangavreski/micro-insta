import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {DataServiceService} from '../../services/data-service.service';
import { IPost } from '../post/post';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  randomPic = "https://picsum.photos/600/300"
  postList: IPost[] = [];
  sub! : Subscription;
  start : number = 0;
  limit : number = 15;
  constructor(private dataService:DataServiceService) { }

  fetchData(){
    this.sub = this.dataService.getData(this.start,this.limit).subscribe(
      {
        next: posts  => {
          console.log(posts.length)
          this.postList=this.postList.concat(posts);
        }
      }
    )
  }
  ngOnInit(): void {
    this.fetchData();
  }
  showMore(){
    this.start+=15;
    console.log(`Start : ${this.start} Limit : ${this.limit}`);
    this.fetchData();
  }
}
