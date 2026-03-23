import { Component } from '@angular/core';
import { Transaction } from '../interfaces/transaction';
import { TransactionService } from '../services/transaction.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  selectedTransaction: undefined | Transaction
  TransactionList: Transaction[] = []
  totalIncome : number = 0
  totalExpense : number = 0
  balance : number = 0
  constructor(private TransactionService: TransactionService) { }

  addTransaction(data: Transaction) {
    if (!this.selectedTransaction) {
      this.TransactionService.saveTransactions(data).subscribe(() => {
        console.log("Data .... ", data)
      })
    } else {

    }


  }

  getData() {
    this.TransactionService.getTransactions().subscribe((data: any) => {
      this.TransactionList = data.data
      
    })
  }

  getSummary(){
    const income = this.TransactionList
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + Number(t.amount), 0);
      const expense = this.TransactionList
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + Number(t.amount), 0);

      const convertIncomeDollar = this.TransactionList
        .filter((t) => t.currency === "Dollar" && t.type === "income")
        .reduce((sum, t) => sum + Number(t.amount) * 91, 0);
      const convertExpenseDollar = this.TransactionList
        .filter((t) => t.currency === "Dollar" && t.type === "expense")
        .reduce((sum, t) => sum + Number(t.amount) * 91, 0);

      const convertIncomeCanadianDollar = this.TransactionList
        .filter((t) => t.currency === "CanadianDollar" && t.type === "income")
        .reduce((sum, t) => sum + Number(t.amount) * 65, 0);
      const convertExpenseCanadianDollar = this.TransactionList
        .filter((t) => t.currency === "CanadianDollar" && t.type === "expense")
        .reduce((sum, t) => sum + Number(t.amount) * 65, 0);

      const convertIncomeYen = this.TransactionList
        .filter((t) => t.currency === "Yen" && t.type === "income")
        .reduce((sum, t) => sum + Number(t.amount) * 0.5, 0);
      const convertExpenseYen = this.TransactionList
        .filter((t) => t.currency === "Yen" && t.type === "expense")
        .reduce((sum, t) => sum + Number(t.amount) * 0.5, 0);

      const convertIncomePound = this.TransactionList
        .filter((t) => t.currency === "Pound" && t.type === "income")
        .reduce((sum, t) => sum + Number(t.amount) * 121, 0);
      const convertExpensePound = this.TransactionList
        .filter((t) => t.currency === "Pound" && t.type === "expense")
        .reduce((sum, t) => sum + Number(t.amount) * 121, 0);

      const ConvertedIncome =
        convertIncomeCanadianDollar +
        convertIncomeDollar +
        convertIncomePound +
        convertIncomeYen +
        income;
      const ConvertedExpense =
        convertExpenseCanadianDollar +
        convertExpenseDollar +
        convertExpensePound +
        convertExpenseYen +
        expense;

      this.totalIncome = ConvertedIncome;
      this.totalExpense = ConvertedExpense;
      this.balance = ConvertedIncome - ConvertedExpense;

  }
  ngOnInit(){
    this.getData()  
  }

  
}
