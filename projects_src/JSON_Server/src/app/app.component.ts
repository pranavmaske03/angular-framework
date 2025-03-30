import { Component } from '@angular/core';
import { MarvellousService } from './marvellous.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[MarvellousService]
})
export class AppComponent implements OnInit
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
      this.service.getBatches().subscribe(data =>
          {
            this.message = data;
          });
      this.variable = "FUCK YOU";
    }

    public Display()
    {
        this.variable = "HELLO WORLD...";
    }
}
