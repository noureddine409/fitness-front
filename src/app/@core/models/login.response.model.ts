import {Token} from "./token.model";

export interface LoginResponse {

  accessToken: Token;
  refreshToken: Token;

}
