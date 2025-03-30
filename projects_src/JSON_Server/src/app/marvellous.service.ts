import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService 
{

  constructor(private http : HttpClient) 
  {}

  getBatches()
  {
    return this.http.get("http://localhost:3000/batches")
  }
}
