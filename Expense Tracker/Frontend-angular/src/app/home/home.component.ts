import { Component } from '@angular/core';
import { Transaction } from '../interfaces/transaction';
import { TransactionService } from '../services/transaction.service';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  selectedTransaction: undefined | Transaction
  TransactionList: Transaction[] = []
  totalIncome : number = 0
  totalExpense : number = 0
  balance : number = 0
  isEditMode = false
  currentId = ''
  form!:FormGroup
  constructor(private transactionService: TransactionService, private router : ActivatedRoute,private fb : FormBuilder, private r : Router) { }

  addTransaction(data: Transaction) {
    if (!this.selectedTransaction) {
      this.transactionService.saveTransactions(data).subscribe({
        next: () => {
          this.form.reset()
          this.getData()
        }
      })
    } else {

    }


  }

  getData() {
    this.transactionService.getTransactions().subscribe((data: any) => {
      this.TransactionList = data.data
      
    })
  }

  getSummary(){
    this.getData()
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

    this.getSummary()
    this.form = this.fb.group({
      title : [''],
      amount : [''],
      currency : [''],
      type : [''],
      category : [''],
      description : ['']
    })

    this.router.paramMap.subscribe(params => {
      const id = params.get('id')
      console.log("ID ... ",id)
      if(id){
        this.isEditMode = true,
        this.currentId = id

        this.loadTransaction(id)
      }
    })
  }

  loadTransaction(id:string){
    this.transactionService.selectedTransaction(id).subscribe({
      next: (res : any) => {
        console.log("data..",res)
        this.form.patchValue(res.data)
      },
      error : (err) => alert(err)
    })
  }

  onSubmit(){
    if(this.form.invalid) return

    if(this.isEditMode){
      this.transactionService.updateTransaction(this.currentId,this.form.value).subscribe({
        next : () => {
          this.r.navigate(['/transactions'])
        },
        error : (err) => {
          alert(err)
        }
      })
    }else{
      this.addTransaction(this.form.value)
      this.getData()
    }
  }
  
}
