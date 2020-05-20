import { Auth } from './AuthServe';
import { User } from './UserServe';
import { Raffle } from './RaffleService';

export function applyAuthHeader() {
  User.applyToken();
  Auth.applyToken();
  Raffle.applyToken();
}

export * from './AuthServe';
export * from './UserServe';
export * from './RaffleService';