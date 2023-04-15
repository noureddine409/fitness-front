import {AppUser} from "./user.model";

export interface ProgramDto {
  id?: number;//not required
  createdAt?: string;//not required
  updatedAt?: string;//not required
  name: string;
  level: string;
  price: number;
  category: string;
  description: string;
  createdBy?: AppUser;//not required
  motivationDescription?: string;//not required
  durationPerDay: number;
  options: Set<string>;
  equipments: Set<string>;
  sections: ProgramSectionDto[];
  picture: string;
}

export interface ProgramSectionDto {

  id?: number;//not required
  createdAt?: string;//not required
  updatedAt?: string;//not required
  title: string;
  description: string;
  level: string;
  video?: SectionVideoDto;//not required
}

export interface SectionVideoDto {
  url?: string;

  id?: number;
  createdAt?: string;
  updatedAt?: string;
}
