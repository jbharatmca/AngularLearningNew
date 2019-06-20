import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  
  public _url : string = "/assets/Data/employeelist.json";
  
  constructor(private http:HttpClient) { }

  getEmployeList() : Observable <IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this._url).pipe(      
      map(data => {
        return data;
      }),      
      catchError(error => {
        return Observable.throw('Something went wrong ;)');
      })
    );
  }
}
