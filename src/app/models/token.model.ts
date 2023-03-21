import {Timestamp} from "rxjs";

export interface Token {

  token: string;
  tokenType: string;
  createdAt: Timestamp<string>;
  expiresIn: Timestamp<string>;


}
