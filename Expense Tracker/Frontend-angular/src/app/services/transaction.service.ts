import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../interfaces/transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {



  constructor(private http:HttpClient) { }

  saveTransactions(data:Transaction):Observable<Transaction>{
    return this.http.post<Transaction>('http://localhost:3000/transactions',data,{withCredentials:true})
  }

  getTransactions():Observable<Transaction[]>{
    return this.http.get<Transaction[]>("http://localhost:3000/transactions",{withCredentials:true})
  }

  deleteTransactions(id:string):Observable<Transaction>{
    return this.http.delete<Transaction>("http://localhost:3000/transactions"+'/'+id,{withCredentials:true})
  }

  selectedTransaction(id:string):Observable<Transaction>{
    return this.http.get<Transaction>("http://localhost:3000/transactions"+'/'+id,{withCredentials:true})
  }

  updateTransaction(data:Transaction):Observable<Transaction>{
    return this.http.put<Transaction>("http://localhost:3000/transactions"+'/'+data._id,data, {withCredentials : true})
  }
}
