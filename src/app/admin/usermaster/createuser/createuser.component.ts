import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  status:any = "";
  BillingAddress:any="";
  CompanyName:any="";
  Billingcity:any="";
  BillingZipcode:any="";
  BillingState:any="";
  ShippingAddress:any="";
  ShippingCity:any="";
  ShippingState:any="";
  ShippingZipcode:any="";
  id:any = "";

action = 'create';


    constructor(public apiservice:ApiService,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((pData:any) => {
      console.log(pData.action)
      if(pData.action == 'create'){
        this.action = 'create';

      }else{
        this.action = 'edit';
        this.route.queryParams.subscribe((eData:any) => {
          this.id = eData.id;
          this.apiservice.getAllDealers({_id:eData.id}).subscribe((cdata:any)=>{
            console.log(cdata.dealers[0])
            this.name = cdata.dealers[0].user?.name;
            this.email= cdata.dealers[0].user?.email;
            this.password= cdata.dealers[0].password;
            this.status = cdata.dealers[0].user?.status;
            this.mobile= cdata.dealers[0].Mobile;
            this.BillingAddress= cdata.dealers[0].billingAddress;
            this.CompanyName= cdata.dealers[0].companyName;
            this.Billingcity= cdata.dealers[0].billingcity;
            this.BillingZipcode= cdata.dealers[0].billingZipCode;
            this.BillingState= cdata.dealers[0].billingState;
            this.ShippingAddress= cdata.dealers[0].shippingAddress;
            this.ShippingCity= cdata.dealers[0].shippingCity;
            this.ShippingState= cdata.dealers[0].shippingState;
            this.ShippingZipcode= cdata.dealers[0].shippingZipCode;
        })
        })
      }
    })
   
  }

  submit(){
    if(this.action == 'create'){
      this.createdealers();
    }else{
      this.editdealers();
    }
    
  }

editdealers(){
  const data=JSON.stringify({
    name:this.name,
    email:this.email,
    password:this.password,
    Mobile:this.mobile,
    status:this.status,
    billingAddress:this.BillingAddress,
    companyName:this.CompanyName,
    billingCity:this.Billingcity,
    billingZipCode:this.BillingZipcode,
    billingState:this.BillingState,
    shippingAddress:this.ShippingAddress,
    shippingCity:this.ShippingCity,
    shippingState:this.ShippingState,
    shippingZipCode:this.ShippingZipcode
  });
  this.apiservice.updateDealers(this.id,data).subscribe((cdata:any)=>{
      console.log(cdata)
  })
}

  createdealers(){
    const data=JSON.stringify({
      name:this.name,
      email:this.email,
      password:this.password,
      Mobile:this.mobile,
      status:this.status,
      billingAddress:this.BillingAddress,
      companyName:this.CompanyName,
      billingCity:this.Billingcity,
      billingZipCode:this.BillingZipcode,
      billingState:this.BillingState,
      shippingAddress:this.ShippingAddress,
      shippingCity:this.ShippingCity,
      shippingState:this.ShippingState,
      shippingZipCode:this.ShippingZipcode
    });
    this.apiservice.createDealers(data).subscribe((cdata:any)=>{
        console.log(cdata)
    })
  }

}


