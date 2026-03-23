export interface Transaction {
    _id: string,
    title: string,
    amount: number,
    currency:string,
    type: 'income' | 'expense',
    category : string,
    description? : string,
    createdAt : string
}
