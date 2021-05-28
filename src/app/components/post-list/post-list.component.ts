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
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.sub = this.dataService.getData().subscribe(
        {
          next: posts => {
            this.postList = posts.slice(0,40);
          }
        }
      )

  }

  ngOnDestroy():void {
    this.sub.unsubscribe();
  }

}
