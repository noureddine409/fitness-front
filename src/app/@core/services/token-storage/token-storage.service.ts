import {Injectable} from '@angular/core';
import {
  CURRENT_USER_KEY,
  ALERT_MESSAGES,
  REFRESH_TOKEN_KEY,
  RESET_TOKEN_KEY,
  TOKEN_KEY
} from "../../../@shared/constants";
import {Token} from "../../models/token.model";
import {AppUser} from "../../models/user.model";
import {BehaviorSubject} from "rxjs";




@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private currentUserSubject = new BehaviorSubject<AppUser | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();


  constructor() {
    const userJson = localStorage.getItem(CURRENT_USER_KEY);
    if (userJson) {
      const user = JSON.parse(userJson);
      this.currentUserSubject.next(user);
    }
  }

  signOut(): void {
    localStorage.clear();
  }

  public saveToken(token: Token): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
  }

  public getToken(type: string): Token | null {
    const tokenExist = localStorage.getItem(type);

    if (tokenExist === null) {
      return null;
    }

    try {
      const token = JSON.parse(tokenExist);
      return token;
    } catch (e) {
      console.error(ALERT_MESSAGES.TECHNICAL_ERRORS.ERROR_JSON_PARSE, e);
      return null;
    }
  }


  public saveRefreshToken(token: Token): void {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.setItem(REFRESH_TOKEN_KEY, JSON.stringify(token));
  }

  public saveResetToken(token: Token): void {
    localStorage.removeItem(RESET_TOKEN_KEY);
    localStorage.setItem(RESET_TOKEN_KEY, JSON.stringify(token));
  }


  setCurrentUser(user: AppUser | null) {
    if (user) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
    this.currentUserSubject.next(user);
  }
}
