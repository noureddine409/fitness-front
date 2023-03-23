import {Injectable} from '@angular/core';
import {REFRESH_TOKEN_KEY, TOKEN_KEY} from "../../constants/constants";
import {Token} from "../../models/token.model";


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {


  constructor() {
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
      return JSON.parse(tokenExist);
    } catch (e) {
      console.error('Error parsing token:', e);
      return null;
    }
  }


  public saveRefreshToken(token: Token): void {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.setItem(REFRESH_TOKEN_KEY, JSON.stringify(token));
  }


}
