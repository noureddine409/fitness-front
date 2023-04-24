import {AppUser} from "./user.model";

export interface JoinDto{
  expertise: string;
  message: string;
  experience: string;
  approved: boolean;
  sender: AppUser;
  documents: string[];
}
export interface JoinTreatDto{
  accepted: boolean;
}
