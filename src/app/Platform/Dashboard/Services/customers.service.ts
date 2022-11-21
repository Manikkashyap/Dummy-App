import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private GetCustomers = '/assets/customers-large.json'
  constructor( private http: HttpClient ) { }

  getCustomers(){
    return this.http.get<any>(environment.apiUrl + this.GetCustomers).toPromise()
    .then(res => <any[]>res.data)
    .then(data => { return data; });;
  }
}
