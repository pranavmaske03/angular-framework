import { Component } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { OnInit } from '@angular/core';
import { ɵinitDomAdapter } from '@angular/platform-browser';


@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrl: './batchdetails.component.css'
})
export class BatchdetailsComponent implements OnInit
{
  public departmentId : any;
  public data : any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  batches = [
    {"id" : 1, "Desc" : "full_name : Pre-Placement Activity | Duration : 4 months | fees = 20000"},
    {"id" : 2, "Desc" : "full_name : Logic Building | Duration : 4.5 months | fees = 21000"},
    {"id" : 3, "Desc" : "full_name : Angular with MEAN Stack | Duration : 3 months | fees = 22000"},
    {"id" : 4, "Desc" : "full_name : Python Machine Learning | Duration : 3.5 months | fees = 19000"},
    {"id" : 5, "Desc" : "full_name : Linux System Programming | Duration : 4 months | fees = 22500"},
  ]

  ngOnInit() 
  {
    this.route.paramMap.subscribe((params: ParamMap) => 
    {
      this.departmentId = parseInt(params.get('id')!);
    });

    for(var i = 0; i < 5; i++)
    { 
      if(this.batches[i].id == this.departmentId)
      {
         this.data = this.batches[i].Desc;
      }
    }
  }

  gotoDepartments() 
  {         
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }
}
// this.service.getBatches().subscribe(data=>{this.message = data;});
