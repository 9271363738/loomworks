import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {

  name:any ="";
  email:any="";
  password:any="";
  mobile:any="";

    constructor(public apiservice:ApiService) { }

  ngOnInit(): void {
  }

  submit(){
    const data=JSON.stringify({
      name:this.name,
      email:this.email,
      password:this.password,
      mobile:this.mobile
    })
    this.apiservice.register(data).subscribe((res:any)=>{
      console.log(res)
    })
  }

}
