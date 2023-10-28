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
  id:any='';
  action='create'
  constructor(private apiservice:ApiService,public route:Router,public routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.apiservice.getAllDealers({}).subscribe((cdata=>{
      this.dealers=cdata.dealers
      console.log(this.dealers[0].user?.name)
    }))

    this.routes.params.subscribe((pData:any) => {
      console.log(pData.action)
      if(pData.action == 'create'){
        this.action = 'create';

      }else{
        this.action = 'edit';
        this.routes.queryParams.subscribe((eData:any) => {
          this.id = eData.id;
          this.apiservice.gatAllItem({_id:eData.id}).subscribe((cdata:any)=>{
            console.log(cdata.item[0])
            this.Name = cdata.item[0].name;
            this.Brand=cdata.item[0].brand;
            this.Description=cdata.item[0].description;
            this.Color=cdata.item[0].color;
            this.Hsncode=cdata.item[0].Hsncode;
            this.sizes=cdata.item[0].sizes;
            this.Catagory=cdata.item[0].Catagory;
            this.Price=cdata.item[0].price;
            this.Dealer=cdata.item[0].Dealer._id
            this.Sku=cdata.item[0].Sku;
          })
          console.log(eData)
        
      })
  }
})
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
      Sku:this.Sku,
      brand:this.Brand,
      description:this.Description,
      color:this.Color,
      Hsncode:this.Hsncode,
      sizes:this.sizes,
      Catagory:this.Catagory,
      price:this.Price,
      Dealer:this.Dealer
    })
    // console.log(data)

    this.apiservice.createItem(data).subscribe((cdata:any)=>{
      console.log(cdata)
    })
    
  }
  submit(){
    if(this.action == 'create'){
      this.CreateItom();
    }else{
      this.edititom();
    }
    
  }



edititom(){
  const data=JSON.stringify({
    name:this.Name,
    Sku:this.Sku,
    brand:this.Brand,
    description:this.Description,
    color:this.Color,
    Hsncode:this.Hsncode,
    sizes:this.sizes,
    Catagory:this.Catagory,
    price:this.Price,
    Dealer:this.Dealer

  })
  this.apiservice.updateItem(this.id,data).subscribe((cdata:any)=>{
        console.log(cdata)
  })
}


}
