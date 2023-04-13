import {AppUser} from "./user.model";

export interface ProgramDto {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  name: string;
  level: string;
  price: number;
  category: string;
  description: string;
  createdBy?: AppUser;
  motivationDescription?: string;
  durationPerDay: number;
  options: Set<string>;
  equipments: Set<string>;
  sections: ProgramSectionDto[];
}

export interface ProgramSectionDto {

  id?: number;
  createdAt?: string;
  updatedAt?: string;
  title: string;
  description: string;
  level: string;
  video?: SectionVideoDto;
}

export interface SectionVideoDto {
  url?: string;

  id?: number;
  createdAt?: string;
  updatedAt?: string;
}
