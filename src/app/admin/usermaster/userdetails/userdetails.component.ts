import { Component, OnInit,Input } from '@angular/core';
import { CreateuserComponent } from '../createuser/createuser.component';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  constructor(private api:ApiService,public route:ActivatedRoute) {}
  courseId:any;
  course:any;
data:any=[];
  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      this.courseId=res.id
      this.api.getAllDealers({_id:this.courseId}).subscribe((cdata:any)=>{
        this.data=cdata.dealers[0]
        console.log(this.data);
    })
    })



  }

}
