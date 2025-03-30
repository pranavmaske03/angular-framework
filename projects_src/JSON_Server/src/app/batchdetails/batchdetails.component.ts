import { Component } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrl: './batchdetails.component.css',
  providers:[MarvellousService]
})
export class BatchdetailsComponent 
{
  constructor(private service : MarvellousService)
    {}

    public data : any = [];
    public message : any = [];
    public variable : any;

    ngOnInit(): void 
    {
        this.service.getBatches().subscribe(data =>
          {
             this.data = data;
          });
    }
    public SendMessage()
    {
      this.message = this.data;
    }
}
