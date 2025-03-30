import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  constructor(private http : HttpClient) { }

    getBatches()
    {
        return this.http.get("http://localhost:4698/getBatches");
    }
    updateBatches()
    {
        return this.http.get("http://localhost:4698/updateBatches");
    }
    deleteBatches()
    {
      return this.http.get("http://localhost:4698/deleteBatches");
    }
    insertBatches()
    {
      return this.http.get("http://localhost:4698/insertBatches");
    }
}
