import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
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
  
  constructor(private apiservice:ApiService,public route:Router) { }

  ngOnInit(): void {
    this.apiservice.getAllDealers({}).subscribe((cdata=>{
      this.dealers=cdata.dealers
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
