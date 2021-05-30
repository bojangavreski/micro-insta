import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NewpostComponent } from './components/newpost/newpost.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { DialogComponent } from './components/post-details/dialog/dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostListComponent,
    PostComponent,
    NewpostComponent,
    PostDetailsComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatMenuModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    RouterModule.forRoot(
      [ {path:'feed',component:PostListComponent},
        {path:'post/:id',component:PostDetailsComponent},
        {path:'newpost',component:NewpostComponent},
        {path:'newpost/:id',component:NewpostComponent},
        {path:'**',redirectTo:'feed'}]
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
