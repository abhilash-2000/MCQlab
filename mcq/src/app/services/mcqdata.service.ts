import { Injectable } from '@angular/core';
import { Observable, observable,of } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Data } from '../modles/data';
const httpOpetions={
  headers : new HttpHeaders({'content-type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class MCQdataService {
  postsUrl: string='http://localhost:3000/api/MCQ';
  constructor(private http:HttpClient) { }
  getPosts():Observable<Data[]>{
    return this.http.get<Data[]>(this.postsUrl);
  }
  savepost(post:Data):Observable<Data>{
    return this.http.post<Data>(this.postsUrl,post,httpOpetions);
  }
}
