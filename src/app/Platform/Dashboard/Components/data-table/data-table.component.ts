import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../Services/customers.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  customers: any;
  loading: boolean = false;
  constructor(private _customers: CustomersService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers = () =>{
    this.loading = true;
    this._customers.getCustomers().then((customers:any)=>{
      if(customers){
        this.customers = customers;
        this.loading = false;
      }else{
        this.loading = false;
      }
    }, error => {
      this.loading = false;
      console.log("Error:",error);
    })
  }
}
