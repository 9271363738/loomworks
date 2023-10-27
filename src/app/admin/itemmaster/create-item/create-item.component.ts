import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  sizes:any=[];
  Name:any="";
  Brand:any="";
  Sku:any="";
  Color:any="";
  Hsncode:any="";
  Description:any="";
  Dealer:any="";
  Catagory:any="";
  Price:any="";
  dealers:any=[];
  action="create"
  id:any=""
  constructor(private apiservice:ApiService,public route:Router,public routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.apiservice.getAllDealers({}).subscribe((cdata=>{
      this.dealers=cdata.dealers
      this.routes.params.subscribe((pData:any) => {
        console.log(pData.action)
        if(pData.action == 'create'){
          this.action = 'create';
  
        }else{
          this.action = 'edit';
          this.routes.queryParams.subscribe((eData:any) => {
            this.id = eData.id;
            this.apiservice.getAllDealers({_id:eData.id}).subscribe((cdata:any)=>{
              console.log(cdata.item[0])
              this.Name = cdata.item[0].user?.name;
              this.Sku= cdata.dealers[0].user?.sku;
              this.Brand= cdata.dealers[0].brand;
              this.Description = cdata.dealers[0].user?.description;
              this.Color= cdata.dealers[0].color;
              this.Hsncode= cdata.dealers[0].Hsncode;
              this.sizes= cdata.dealers[0].sizes;
              this.Catagory= cdata.dealers[0].Catagory;
              this.Price= cdata.dealers[0].price;
          })
          })
        }
      })
     



    }))
  }

  addItem(){
    this.sizes.push({name:""})
  }

  deleteSize(i:any){
    this.sizes.splice(i,1)
  }

  CreateItom(){
    const data=JSON.stringify({
      name:this.Name,
      sku:this.Sku,
      brand:this.Brand,
      description:this.Description,
      color:this.Color,
      Hsncode:this.Hsncode,
      sizes:this.sizes,
      Catagory:this.Catagory,
      price:this.Price
    })
    console.log(data)

    this.apiservice.createItem(data).subscribe((cdata:any)=>{
      console.log(cdata)
    })
    
  }

}
