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
    return this.http.post<Transaction>('http://localhost:3000/transactions',data)
  }

  getTransactions():Observable<Transaction[]>{
    return this.http.get<Transaction[]>("http://localhost:3000/transactions")
  }

  deleteTransactions(id:string):Observable<Transaction>{
    return this.http.delete<Transaction>("http://localhost:3000/transactions"+'/'+id)
  }

  selectedTransaction(id:string):Observable<Transaction>{
    return this.http.get<Transaction>("http://localhost:3000/transactions"+'/'+id)
  }

  updateTransaction(data:Transaction):Observable<Transaction>{
    return this.http.put<Transaction>("http://localhost:3000/transactions"+'/'+data._id,data)
  }
}
