import { Component } from '@angular/core';
import { FromModel } from './form.model';
import { FormBuilder,FormGroup } from '@angular/forms';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent 
{
    public formobj : FromModel = new FromModel();

    formValue!:FormGroup
    allformData: any;    
    showAdd:boolean = true;
  
    constructor(private formbuilder: FormBuilder, private api: FormserviceService) { }
  
    ngOnInit(): void 
    {
      this.formValue = this.formbuilder.group ({

        first_name: [''],
        middle_name: [''],
        last_name : [''],
        contact: [''],
        email: [''],
        education: [''],
        collage : [''],
        mother_pro : [''],
        father_pro : [''],
        parents_phone : [''],
        curr_address : [''],
        per_address : [''],
        batch : [''],
        amount : [''],
      })
      //this.insertData();
    }

    public insertData()
    {
      this.formobj.first_name = this.formValue.value.first_name;
      this.formobj.middle_name = this.formValue.value.middle_name;
      this.formobj.last_name = this.formValue.value.last_name;
      this.formobj.contact = this.formValue.value.contact;
      this.formobj.email = this.formValue.value.email;
      this.formobj.education = this.formValue.value.education;
      this.formobj.collage = this.formValue.value.collage;
      this.formobj.mother_pro = this.formValue.value.mother_pro;
      this.formobj.father_pro = this.formValue.value.father_pro;
      this.formobj.parents_phone = this.formValue.value.parents_phone;
      this.formobj.curr_address = this.formValue.value.curr_address;
      this.formobj.per_address = this.formValue.value.per_address;
      this.formobj.batch = this.formValue.value.batch;
      this.formobj.amount = this.formValue.value.amount;

      this.api.postFormData(this.formobj).subscribe(res => {
        console.log(res);
        alert("Data added sucessfully");
        this.formValue.reset();
      },err=> {
        console.log("Failed to insert data");
      });
    }
}
