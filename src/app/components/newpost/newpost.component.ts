import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IPost } from '../post/post';


@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css'],
})
export class NewpostComponent implements OnInit {
  constructor(
    private dataService: DataServiceService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
   ) {}

  buttonName: string = 'Post';

  postDef: IPost = {
    albumId: '',
    id: 0,
    title: '',
    url: '',
    thumbnailUrl: '',
  };

  newPost: IPost = { ...this.postDef };

  addNewPost(): void {
    this.dataService.postData(this.newPost).subscribe(
      () => this.openSnackBar('Successfully Posted'),
      (error) => console.log(error)
    );
  }
  updatePost(): void {
    this.dataService.postData(this.newPost).subscribe(
      () => this.openSnackBar('Successfully updated'),
      (error) => console.log(error)
    );
  }
  onSubmit(form: NgForm): void {
    if (form.valid) {
      if (this.buttonName === 'Edit') {
        this.updatePost();
      } else {
        this.addNewPost();
      }
    } else {
      this.openSnackBar('Invalid request');
    }
  }

  getPostById(id: number): void {
    this.dataService.getDataById(id).subscribe({
      next: (post: IPost) => {
        this.newPost = post;
        this.newPost.id = id;
      },
    });
  }

  ngOnInit(): void {
    let id: number | undefined = this.activatedRoute.snapshot.params['id'];
    if (id !== undefined) {
      this.getPostById(id);
      this.buttonName = 'Edit';
    }
  }
  openSnackBar(message:string) {
    this._snackBar.open(message, 'Close', { duration: 3000 });
  }
}
