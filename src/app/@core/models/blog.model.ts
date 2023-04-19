import {AppUser} from "./user.model";
import {ProgramSectionDto} from "./program.model";

export interface BlogDto {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  name: string;
  state?: string;
  description: string;
  createdBy?: AppUser;
  tags: string[];
  picture?: string;
}
