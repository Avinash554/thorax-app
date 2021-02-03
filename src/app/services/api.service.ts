import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiurl="https://api.github.com/repos/walmartlabs/thorax/issues  ";

  constructor(private http:HttpClient) { }
  
  getConfig(){
    return this.http.get<any>(this.apiurl);
  }
}
