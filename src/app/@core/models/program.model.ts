import {AppUser} from "./user.model";

export interface ProgramDto {
  id?: number;//not required
  createdAt?: string;//not required
  updatedAt?: string;//not required
  name: string | null;
  level: string;
  price: number;
  category: string;
  description: string | null;
  createdBy?: AppUser;//not required
  motivationDescription?: string |null;//not required
  durationPerDay: number;
  options: Set<string>;
  equipments: Set<string>;
  sections: ProgramSectionDto[];
  picture: string | null;
}

export interface ProgramSectionDto {

  id?: number;//not required
  createdAt?: string;//not required
  updatedAt?: string;//not required
  title: string | null;
  description: string | null;
  level: string;
  video?: SectionVideoDto;//not required
}

export interface SectionVideoDto {
  url?: string;

  id?: number;
  createdAt?: string;
  updatedAt?: string;
}
