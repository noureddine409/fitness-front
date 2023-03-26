import {Injectable} from '@angular/core';
import {ERROR_MESSAGES, REFRESH_TOKEN_KEY, TOKEN_KEY} from "../../constants/constants";
import {Token} from "../../models/token.model";


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {


  constructor() {
  }

  signOut(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
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
      console.error(ERROR_MESSAGES.TECHNICAL_ERRORS.ERROR_JSON_PARSE, e);
      return null;
    }
  }


  public saveRefreshToken(token: Token): void {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.setItem(REFRESH_TOKEN_KEY, JSON.stringify(token));
  }


}
