import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-usermaster',
  templateUrl: './usermaster.component.html',
  styleUrls: ['./usermaster.component.scss']
})
export class UsermasterComponent implements OnInit {
list:any=[];
item_id:any;
  constructor(private api:ApiService,public route:Router) { }

  ngOnInit(): void {
    this.api.getAllDealers({}).subscribe((cdata:any)=>{
      this.list=cdata.dealers;
    })
  }

  onclick(item_id:any){
      this.route.navigate(['/admin/usermaster/userdetails/'+item_id])
  }

  edit(item_id:any){
    this.route.navigate(['/admin/usermaster/createuser/edit'],{
      queryParams:{id:item_id,name:"Lubdha",mail:""}
    })
  }
  removedata(item_id:any){
    this.api.deleteDealers(item_id).subscribe((cdata:any)=>{
      this.list=cdata.dealers
  
    })
  }
}
