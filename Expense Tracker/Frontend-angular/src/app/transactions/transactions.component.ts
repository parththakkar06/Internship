import { Component } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Transaction } from '../interfaces/transaction';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions',
  imports: [CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {

  constructor(private transactionService : TransactionService){}

  TransactionList : Transaction[] = []

  getTransactions(){
    this.transactionService.getTransactions().subscribe((data : any)=>{
      this.TransactionList = data.data
      console.log(this.TransactionList)
    })
  }

  deleteTransaction(id : string){
    this.transactionService.deleteTransactions(id).subscribe((data:Transaction)=>{
      console.log("deleted data ... " , data)
      if(data){
        this.getTransactions()
      }
    })
  }

  ngOnInit(){
    this.getTransactions()
  }

  applyCategoryFilter(selectedCategory : string){
    this.getTransactions()
    console.log(selectedCategory)
    if(selectedCategory === "all"){
      this.getTransactions()
      return
    }
    setTimeout(() => {
      
      const filteredData = this.TransactionList.filter((t)=>t.category === selectedCategory)
      console.log(filteredData)
      this.TransactionList = filteredData
    }, 10);
  }

  applyTypeFilter(selectedType : string){
    this.getTransactions()
    console.log(selectedType)
    if(selectedType === "all"){
      this.getTransactions()
      return
    }
    setTimeout(() => {
      
      const filteredData = this.TransactionList.filter((t)=>t.type === selectedType)
      console.log(filteredData)
      this.TransactionList = filteredData
    }, 10);
  }
}
