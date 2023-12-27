export default interface paymentData {
  downpaymentNumber?: number | undefined;
  downPaymentQuota?: number | undefined;
  downpaymentComments?: string | undefined;
  reservationPrice: number;
  reservationNumber?: number | undefined;
  reservationQuota?: number | undefined;
  reservationComments?: string | undefined;
  interest: number;
  payday: number;
  comments?: string | undefined;
  startDate: Date; // You might want to specify the correct date format if it's a string
  endDate: Date; // You might want to specify the correct date format if it's a string
  frontDpiUrl: string;
  backDpiUrl: string;
  signatureUrl: string;
}
