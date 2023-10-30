import { ActivatedRoute, Route, Router } from '@angular/router';
import { ItemmasterComponent } from './../../../admin/itemmaster/itemmaster.component';
import { User } from './../../../core/models/auth.models';
import { Component, ComponentFactoryResolver, ElementRef, OnInit } from '@angular/core';
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
  hsnCode:any="";
  billingAddress:any="";
  totalquantity:any=''
  Category:any ="";
  Dealer:any = "";
  
  PONo:any="";
  poDate:any="";
  date:any="";
  list:any=[];
  num:any;
  finalvalue:any=[]
  id:any;
itemlist1:any=[]
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

   



    this.routes.params.subscribe((pData:any) => {
      console.log(pData.action)
      if(pData.action == 'create'){
        this.action = 'create';

      }else{
        this.action = 'edit';
        this.routes.queryParams.subscribe((eData:any) => {
          this.id = eData.id;
          console.log(this.id)
          this.api.gatAllOrders({_id:eData.id}).subscribe((cdata:any)=>{
            // console.log(cdata.item[0])
            this.CustomerNo = cdata.item[0].name;
            this.poDate=cdata.item[0].poDate;
            this.PONo=cdata.item[0].poNo;
            this.date=cdata.item[0].Data;
          })
          console.log(eData)
        
      })
  }

  
})

  }

  selectCategory(event:any){
 this.api.gatAllItem({Catagory:event}).subscribe((cData:any)=>{
      this.list=cData.item;
      console.log(this.list)
      if(this.list.length>0){
        for(let i=0;i<this.list.length;i++){
          this.list[i].updatePrice = this.list[i].price * this.list[i].sizes.length;
          this.calculateTotalAmount(this.list[i])

        }
      }
      
    })
  }








// main Function

  submit(){
    console.log(this.finalvalue)
    const fdata=JSON.stringify({
      date:this.date,
      poDate:this.poDate,
      customerNo:this.CustomerNo,
      poNo:this.PONo,
      category:this.Category,
      finalData:this.finalvalue
    })
      this.route.navigate(['/user/order/order-summary'],{
        queryParams:{data:fdata}
      })
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
    item.updatePrice = item.updatePrice + item.price;
    this.calculateTotalAmount(item);
    
  }

  decrement(item:any,list:any) {
    if(list.quantity==1)  {
      list.quantity=1;
    }
    list.quantity--;
    item.updatePrice = item.updatePrice - item.price;
    this.calculateTotalAmount(item);
   
  }
 calculateTotalAmount(item:any) {     
    const gstRate = 18;
    console.log(item)
    item.gstAmount = (item.updatePrice * gstRate) / 100;
  item.totalAmount =  item.updatePrice+ item.gstAmount;
  
  
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
    this.finalvalue.push(ele)
    console.log(this.finalvalue)
  }
}