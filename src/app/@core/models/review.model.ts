import {AppUser} from "./user.model";
import {ProgramDto} from "./program.model";

export interface ReviewDto {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  review: string;
  rating: number;
  createdBy: AppUser;
  program: ProgramDto;
}
export interface ReviewPatchDto {
  review: string;
  rating: number;
}
