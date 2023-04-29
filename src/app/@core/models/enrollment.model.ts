import {AppUser} from "./user.model";
import {ProgramDto} from "./program.model";

export interface Order {
  status: string;
  id: string;
  redirectUrl: string;
  createdAt: string;
}

export interface ProgramEnrollment {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  user: AppUser;
  program: ProgramDto;
  progress: ProgramProgressDto;
  payment: PaymentDto;
}

export interface PaymentDto {
  transactionId: string;
  creationDate: string;
  paymentAmount: number;
  currencyCode: string;
  paymentStatus: string;
  paymentMethod: string;
  paymentDescription: string;
  paymentNote: string;
  paymentInvoiceId: string;
  paymentIntent: string;
  paymentCartId: string;
  paymentUser: string;
}
export interface ProgramProgressDto {
  startDate?: string;
  endDate?: string;
  progress?: number;
}
