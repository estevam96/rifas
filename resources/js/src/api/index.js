import { Auth } from './AuthServe';
import { User } from './UserServe';

export function applyAuthHeader() {
  User.applyToken();
  Auth.applyToken();
}

export * from './AuthServe';
export * from './UserServe';