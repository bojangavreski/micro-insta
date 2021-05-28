import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { IPost } from '../post/post';
import { ActivatedRoute,Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  constructor(private dataService:DataServiceService,
              private activeRoute:ActivatedRoute,
              private router:Router,
              private _dialog:MatDialog,
              private _snackBar: MatSnackBar) { }
  id = 0;

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.getPostById();
  }

  post:IPost = {
    id:0,
    albumId:'',
    title:'',
    url:'',
    thumbnailUrl:''
  }

   getPostById():void {
     this.dataService.getDataById(this.id).subscribe({
       next: (newPost:IPost)=>{
          this.post=newPost;
       }
     })
   }

   editPost():void{
      this.router.navigate([`/newpost/${this.id}`]);
   }

   deleteCurentPost():void{
     this.dataService.deletePost(this.id).subscribe(
       () => {
          this.openSnackBar("Post successfully deleted");
          this.router.navigate([''])
       }
     )
   }
   openDialog(){
    const dialogRef = this._dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(
      result => {
        if(result){
            this.deleteCurentPost()
        }
      }
    )
  }
  openSnackBar(message:string) {
    this._snackBar.open(message,'Close',{ duration: 3000 });
  }
}
