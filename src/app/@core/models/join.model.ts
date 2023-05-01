import {AppUser} from "./user.model";

export interface JoinDto{
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  expertise: string;
  message: string;
  experience: string;
  approved?: boolean;
  sender?: AppUser;
  documents?: string[];
}
export interface JoinTreatDto{
  accepted: boolean;
}
