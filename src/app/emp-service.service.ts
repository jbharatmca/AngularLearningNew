import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor() { }

  getEmployeList()
  {
    return [
    {"firstName" : "Bharat" , "lastName":"Raj", "location":"Chennai"},
    {"firstName" : "kumar", "lastName": "selvam","location":"Bangalore"}       ,
    {"firstName":"selin", "lastName":"kumar","location":"USA"}
    ];
  }
}
