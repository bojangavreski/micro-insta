import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IPost} from '../components/post/post';
import { tap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }

  getData(start:number,limit:number):Observable<IPost[]>{
      const headers = new HttpHeaders({'Content-Length':'50'});
      return this.http.get<IPost[]>(`https://jsonplaceholder.typicode.com/photos/?_sort=id&_order=asc&_start=${start}&_limit=${limit}`,{headers:headers});
  }
  getDataById(id:number):Observable<IPost>{
    return this.http.get<IPost>(`https://jsonplaceholder.typicode.com/photos/${id}`);
  }
  postData(post:IPost):Observable<any>{
    return this.http.post('https://jsonplaceholder.typicode.com/photos',post);
  }
  updatePost(post:IPost):Observable<any>{
    return this.http.put(`https://jsonplaceholder.typicode.com/photos/${post.id}`,post);
  }
  deletePost(id:number):Observable<any>{
    return this.http.delete(`https://jsonplaceholder.typicode.com/photos/${id}`);
  }
}
