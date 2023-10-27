import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-itemmaster',
  templateUrl: './itemmaster.component.html',
  styleUrls: ['./itemmaster.component.scss']
})
export class ItemmasterComponent implements OnInit {

  constructor(private apiservice:ApiService) { }

  data:any=[]

  ngOnInit(): void {
      this.apiservice.gatAllItem({}).subscribe((cdata:any)=>{
      this.data=cdata.item
      console.log(this.data)
      })
  }

}
