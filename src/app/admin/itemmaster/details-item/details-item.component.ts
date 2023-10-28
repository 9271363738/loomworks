import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-details-item',
  templateUrl: './details-item.component.html',
  styleUrls: ['./details-item.component.scss']
})
export class DetailsItemComponent implements OnInit {

  constructor(private api:ApiService,public route:ActivatedRoute) { }
itemid:any='';
finaldata:any=[];
  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      this.itemid=res.id
      console.log(this.itemid)
      this.api.gatAllItem({_id:this.itemid}).subscribe((cdata:any)=>{
        this.finaldata=cdata.item[0]
        console.log(this.finaldata);
    })
    })
  }

  

}
