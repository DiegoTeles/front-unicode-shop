export interface GetCreditCardResponse {
  results: CreditCard[];
}

export interface CreditCard {
  id?: number;
  exp_date: string;
  holder: string;
  number: string;
  cvv: string;
}
