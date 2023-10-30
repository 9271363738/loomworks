import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  CustomersData: any;
  masterSelected: any;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder,public route:Router ) { }

  ngOnInit(): void {
  }
  confirm() {
    Swal.fire({
      title: 'You are about to delete a order ?',
      text: 'Deleting your order will remove all of your information from our database.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f46a6a',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Close'
    }).then(result => {
      if (result.value) {
        Swal.fire('Deleted!', 'Order has been deleted.', 'success');
      }
    });
  }
  CreateOrder(){
    this.route.navigate(['/user/order/create-order/create'])
  }
}
