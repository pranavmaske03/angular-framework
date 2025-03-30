import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent implements OnInit
{
  constructor(private api : FormserviceService)
  {}
  public allformData : any;

  ngOnInit(): void 
  {
    this.api.getFormData().subscribe(res => {
      this.allformData = res;
    },err => {
      console.log(err);
    })
  }
}
