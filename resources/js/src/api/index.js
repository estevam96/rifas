import { Auth } from './AuthServe';
import { User } from './UserServe';
import { Raffle } from './RaffleService';
import { Ticket } from './TicketsService';
import { Order } from './OrdersService';
import { Payment } from './PaymentService';
import {Contact } from './ContactService';

export function applyAuthHeader() {
  User.applyToken();
  Auth.applyToken();
  Raffle.applyToken();
  Ticket.applyToken();
  Order.applyToken();
  Payment.applyToken();
  Contact.applyToken();
}

export * from './AuthServe';
export * from './UserServe';
export * from './RaffleService';
export * from './TicketsService';
export * from './OrdersService';
export * from './PaymentService';
export * from './ContactService';