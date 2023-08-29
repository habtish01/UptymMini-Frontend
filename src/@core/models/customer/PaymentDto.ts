export class PaymentDto {
  id: number;
  customerId?: number;
  paymentTypeId?: number;
  paymentTypeName: string;
  cardNumber: string;
  cardHolderName: string;

  //UI
  icon?: string;
}
