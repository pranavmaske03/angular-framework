import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-batch-names',
  templateUrl: './batch-names.component.html',
  styleUrl: './batch-names.component.css'
})
export class BatchNamesComponent implements OnInit
{
    public Batches : any;
    public Message : any;

    constructor(private service : MarvellousService)
    {}

    ngOnInit(): void 
    {
      this.service.getBatches().subscribe(data=>
        {
            this.Batches = data;
        });
    }

    batch_names()
    {
      this.Message = this.Batches;
    }
}
