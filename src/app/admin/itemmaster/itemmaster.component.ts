import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-itemmaster',
  templateUrl: './itemmaster.component.html',
  styleUrls: ['./itemmaster.component.scss']
})
export class ItemmasterComponent implements OnInit {

  constructor(private apiservice:ApiService,public route:Router) { }

  data:any=[]

  ngOnInit(): void {
      this.apiservice.gatAllItem({}).subscribe((cdata:any)=>{
      this.data=cdata.item
      console.log(this.data)
      })
  }


  itemEdit(itemid:any){
    this.route.navigate(['/admin/itemmaster/create-item/edit'],{
      queryParams:{id:itemid,name:"shubham"}
    })
  }


  onclick(userid:any){
    this.route.navigate(['/admin/itemmaster/create-item/'+userid])
    console.log(userid);
}

}
