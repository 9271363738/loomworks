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
userid:any;
  constructor(private api:ApiService,public route:Router) { }

  ngOnInit(): void {
    this.api.getAllDealers({}).subscribe((cdata:any)=>{
      this.list=cdata.dealers;
    })
  }

  onclick(userid:any){
      this.route.navigate(['/admin/usermaster/userdetails/'+userid])

    
  }

  edit(userid:any){
    this.route.navigate(['/admin/usermaster/createuser/edit'],{
      queryParams:{id:userid,name:"Lubdha",mail:""}
    })
  }
  removedata(){
    this.api.deleteDealers(this.userid).subscribe((cdata:any)=>{
      this.list=cdata.dealers
  
    })
  }
}
