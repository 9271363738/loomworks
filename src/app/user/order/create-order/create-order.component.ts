import { ItemmasterComponent } from './../../../admin/itemmaster/itemmaster.component';
import { User } from './../../../core/models/auth.models';
import { Component, OnInit } from '@angular/core';
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

  userForm: any;
  user:any=[];
  CustomerNo:any="";
  PONo:any="";
  poDate:any="";
  date:any="";
  list:any=[];
  
  

  constructor(private formBuilder: FormBuilder,private api:ApiService) { 

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
    })
    

  }
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
  counter = 0;
  increment() {
    this.counter++;
    var itemAmount = document.querySelector('.product-price') as HTMLInputElement;
    var priceselection = document.querySelector(".product-line-price") as HTMLInputElement;
    this.updateQuantity(itemAmount?.value, this.counter, priceselection);
  }

  decrement() {
    this.counter--;
    var itemAmount = document.querySelector('.product-price') as HTMLInputElement;
    var priceselection = document.querySelector(".product-line-price") as HTMLInputElement;
    this.updateQuantity(itemAmount?.value, this.counter, priceselection);
  }

  updateQuantity(amount: any, itemQuntity: any, priceselection:any){
    var linePrice = amount * itemQuntity;    
    priceselection.value = linePrice;
    this.recalculateCart();
  }

  recalculateCart(){
    var priceselection = document.querySelector(".product-line-price") as HTMLInputElement;
    this.subtotal = parseFloat(priceselection.value);
    var tax = this.subtotal * this.taxRate;
	  var discount = this.subtotal * this.discountRate;
	  var shipping = this.subtotal > 0 ? this.shippingRate : 0;
	  var total = this.subtotal + tax + shipping - discount;
    var subTotal = document.getElementById("cart-subtotal") as HTMLInputElement;    
    var cartTax = document.getElementById("cart-tax") as HTMLInputElement;
    var cartShipping = document.getElementById("cart-shipping") as HTMLInputElement;
    var cartTotal = document.getElementById("cart-total") as HTMLInputElement;
    var cartDiscount = document.getElementById("cart-discount") as HTMLInputElement;
    var totalamountInput = document.getElementById("totalamountInput") as HTMLInputElement;
	  var amountTotalPay = document.getElementById("amountTotalPay") as HTMLInputElement;

    subTotal.value = priceselection.value;
    cartTax.value = this.paymentSign + tax;
    cartShipping.value = shipping.toFixed(2);
    cartTotal.value = total.toFixed(2);
    cartDiscount.value = discount.toFixed(2);
    totalamountInput.value = total.toFixed(2);
    amountTotalPay.value = total.toFixed(2);
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
}