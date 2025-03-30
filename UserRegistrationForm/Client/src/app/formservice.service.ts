import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  constructor(private _http : HttpClient) { }

  postFormData(data : any)
  {
    return this._http.post<any>("http://localhost:4698/insertForm", data).pipe(map((res:any)=>{
      return res;
    }));
  }

  getFormData()
  {
    return this._http.get<any>("http://localhost:4698/getData").pipe(map((res:any)=>{
      return res;
    }));
  }
}
