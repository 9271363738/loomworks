import { ActivatedRoute, Route, Router } from '@angular/router';
import { ItemmasterComponent } from './../../../admin/itemmaster/itemmaster.component';
import { User } from './../../../core/models/auth.models';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Validators, AbstractControl, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

 
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  submitted = false;
  InvoicesForm!: FormGroup;
  paymentSign = "$";
  subtotal = 0;
  taxRate = 0.125;
  shippingRate = 65.0;
  discountRate = 0.15;
 action='create'
  userForm: any;
  user:any=[];
  CustomerNo:any="";
  PONo:any="";
  poDate:any="";
  date:any="";
  list:any=[];
  num:any;
  finalvalue:any=''
  id:any;

  constructor(private formBuilder: FormBuilder,private api:ApiService, public route:Router,public ele:ElementRef,public routes:ActivatedRoute) { 

    this.userForm = this.formBuilder.group({
      items: this.formBuilder.array([
        this.formBuilder.control(null)
      ])
    })

    /**
     * Form Validation
     */

  }




  ngOnInit(): void {

    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Invoices' },
      // { label: 'Invoice Details', active: true }``
    ];

    this.api.getAllDealers({}).subscribe((cdata:any)=>{
      this.user=cdata.dealers
     // console.log(this.user);
    })
    this.api.gatAllItem({}).subscribe((cData:any)=>{
      this.list=cData.item
      console.log(this.list);
      for(let i=0;i<=this.list.length;i++){
        this.calculateTotalAmount(this.list[i])
      }
    })



    this.routes.params.subscribe((pData:any) => {
      console.log(pData.action)
      if(pData.action == 'create'){
        this.action = 'create';

      }else{
        this.action = 'edit';
        this.routes.queryParams.subscribe((eData:any) => {
          this.id = eData.id;
          this.api.gatAllOrders({_id:eData.id}).subscribe((cdata:any)=>{
            // console.log(cdata.item[0])
            this.CustomerNo = cdata.item[0].name;
            this.poDate=cdata.item[0].poDate;
            this.PONo=cdata.item[0].poNo;
            this.date=cdata.item[0].Data,
            this.finalvalue=cdata.item[0].finalvalue
          })
          console.log(eData)
        
      })
  }

  
})

  }


// main Function

  submit(){
    if(this.action == 'create'){
      this.next();
    }else{
      this.route.navigate(['/user/order/order-summary'+this.action])
      this.edititom();
    }
    this.route.navigate(['/user/order/order-summary'])
  }


// Edited Order
edititom(){
  const data=JSON.stringify({
    date:this.date,
    poDate:this.poDate,
    customerNo:this.CustomerNo,
    poNo:this.PONo,

  })
  this.api.updateOrders(this.id,data).subscribe((cdata:any)=>{
        console.log(cdata)
  })
}


// Craeted Order
  next(){
    const data=JSON.stringify({
      date:this.date,
      poDate:this.poDate,
      customerNo:this.CustomerNo,
      poNo:this.PONo,

    })
    console.log(data);
    this.api.createOrders(data).subscribe((cData:any)=>{
      console.log(cData)

    })
   
  }

mydata(itemid:any){
    this.route.navigate(['/user/order/order-summary'+itemid._id])
}






  /**
   * Form data get
   */
   get form() {
    return this.InvoicesForm.controls;
  }


   /**
  * Save user
  */
    saveUser() {
      this.submitted = true
    }

  // Default
  counter :number[]=[0];

  increment(item:any,list:any) {
        if(list.quantity==undefined){
           list.quantity=1;
            }
    list.quantity++;
    item.price=item.price*list.quantity
    this.calculateTotalAmount(item) 
    
  }

  decrement(item:any,list:any) {
    if(list.quantity==1)  {
      list.quantity=1;
    }
    list.quantity--;
    item.price=item.price/list.quantity
    this.calculateTotalAmount(item) 
   
  }
 calculateTotalAmount(item:any) {     
    const gstRate = 18;
    item.gstAmount = (item.price * gstRate) / 100;
     this.finalvalue=item.totalAmount =  item.price+ item.gstAmount;
  
    // return totalAmount;
    console.log(item.totalAmount);
  }

 



  // Add Item
  addItem(): void {
    (this.userForm.get('items') as FormArray).push(
      this.formBuilder.control(null)
    );
  }

  // Get Item Data 
  getItemFormControls(): AbstractControl[] {
    return (<FormArray> this.userForm.get('items')).controls
  }

  // Remove Item
  removeItem(index:any) {
    (this.userForm.get('items') as FormArray).removeAt(index);
  }

  quantity: number = 1;

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }


  myfun(ele:any){
    this.finalvalue=ele.totalAmount
  }
}