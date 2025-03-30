import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-batchlist',
  templateUrl: './batchlist.component.html',
  styleUrl: './batchlist.component.css'
})
export class BatchlistComponent 
{
    batches=[
      {"id" : 1,"name" : "PPA"},
      {"id" : 2,"name" : "LB"},
      {"id" : 3,"name" : "MEAN"},
      {"id" : 4,"name" : "PML"},
      {"id" : 5,"name" : "LSP"}
    ]

    constructor(private router : Router,private route : ActivatedRoute)
    {}
    public onSelect(batches : any)
    {
      this.router.navigate([batches.id], { relativeTo: this.route});
    }
}
