import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private baseURL='http://localhost:90/';

  constructor(private _http:HttpClient) { }

  getPosts():Observable<any[]>{
    return this._http.get<any[]>(this.baseURL+'api/countries'); or /articles?page[number]=3&page[size]=1 or http://www.lib4dev.in/info/infinum/Japx/117575371

      
  }
  addPosts(CountryDescription: object): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(CountryDescription);
    console.log(CountryDescription);
    return this._http.post(this.baseURL+'api/country',body, { 'headers': headers});
  }

  editPosts(CountryCode:Number,CountryDescription :object): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(CountryDescription);
    return this._http.put(this.baseURL+'api/country/'+CountryCode,body, { 'headers': headers});
  }
 
  deletePosts(CountryCode:Number): Observable<any>{
    return this._http.delete(this.baseURL+'api/country/'+CountryCode);

  }
 
  /*handleError(handleError:any):Observable<IComment[]>{
    throw new Error("Method not implemented.");
  }*/
}
