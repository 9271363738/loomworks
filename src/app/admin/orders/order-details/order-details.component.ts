import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  breadCrumbItems!: Array<{}>;


  constructor() {

   }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Ecommerce' },
      { label: 'Order Details', active: true }
    ];

  }
  buttonpending=true;
  buttonsuccess=false;
  change()
  {
    this.buttonsuccess=true;
    this.buttonpending=false;
  }
  cancel()
  {
    this.buttonpending=false;
    this.buttonsuccess=false;
  }
}
