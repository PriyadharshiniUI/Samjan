import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IComment } from 'src/interface/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseURL='http://localhost:90/';
  /*http://api.nytimes.com/svc/books/v2/lists/overview.json?published_date=2013-01-01*/

  constructor(private _http:HttpClient) { }

  getPosts():Observable<any[]>{
    return this._http.get<any[]>(this.baseURL+'api/comments?pageno='+1+'&recordsperpage='+10);
      
  }
  addPosts(CommentDescription: object): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(CommentDescription);
    console.log(CommentDescription);
    return this._http.post(this.baseURL+'api/comments',body, { 'headers': headers});
  }

  editPosts(commentId:Number,CommentDescription :object): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(CommentDescription);
    return this._http.put(this.baseURL+'api/comment/'+commentId,body, { 'headers': headers});
  }
 
  deletePosts(commentId:Number): Observable<any>{
    return this._http.delete(this.baseURL+'api/comment/'+commentId);

  }
 
  /*handleError(handleError:any):Observable<IComment[]>{
    throw new Error("Method not implemented.");
  }*/
}
