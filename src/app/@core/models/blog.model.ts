import {AppUser} from "./user.model";
import {ProgramSectionDto} from "./program.model";

export interface BlogDto {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  name: string;
  state?: string;
  content: string;
  createdBy?: AppUser;
  tags: string[];
  picture?: string;
}
export interface BlogPatchDto {
  name?: string;
  content?: string;
  tags?: string[];
}
export interface BlogStateConfig {
  color: string;
  text: string;
}
